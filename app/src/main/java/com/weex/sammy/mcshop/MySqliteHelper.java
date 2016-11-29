package com.weex.sammy.mcshop;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteDatabase.CursorFactory;
import android.database.sqlite.SQLiteException;
import android.database.sqlite.SQLiteOpenHelper;

import java.io.FileOutputStream;
import java.io.IOError;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by sammy on 2016/11/26.
 */

public class MySqliteHelper extends SQLiteOpenHelper {

    public static final int DATABASE_VERSION = 1;
    public static final String DATABASE_NAME = "mcshop.db";
    public static final String DATABASE_PATH = "/data/data/com.weex.sammy.mcshop/databases/";
    private SQLiteDatabase mDatabase;
    private final Context mContext;

    public MySqliteHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
        this.mContext = context;
    }

    public void createDatabase() throws IOException {
        boolean isDatabaseExist = checkDatabase();
        if(isDatabaseExist) {
            //DO NOTHING
        } else {
            this.getReadableDatabase();
            try {
                copyDatabase();
            } catch(IOException e) {
                throw new Error("Error copying database");
            }
        }
    }

    public boolean checkDatabase() {
        SQLiteDatabase checkDatabase = null;

        try {
            String mPath = DATABASE_PATH + DATABASE_NAME;
            checkDatabase = SQLiteDatabase.openDatabase(mPath, null, SQLiteDatabase.OPEN_READONLY);
        } catch(SQLiteException e) {

        }
        if (checkDatabase != null) {
            checkDatabase.close();
        }
        return checkDatabase != null ? true : false;
    }

    public void copyDatabase() throws IOException {
        InputStream mInputStream = mContext.getAssets().open(DATABASE_NAME);
        String outFileName = DATABASE_PATH + DATABASE_NAME;
        OutputStream mOutputStream = new FileOutputStream(outFileName);

        byte[] buffer = new byte[1024];
        int length;
        while ((length = mInputStream.read(buffer)) > 0) {
            mOutputStream.write(buffer, 0, length);
        }
        mOutputStream.flush();
        mOutputStream.close();
        mInputStream.close();
    }

    public void openDatabase() throws SQLiteException {
        String mPath = DATABASE_PATH + DATABASE_NAME;
        mDatabase = SQLiteDatabase.openDatabase(mPath, null, SQLiteDatabase.OPEN_READONLY);
    }

    public List<MCItem> getAllEntriesFromTableItems() {
        String[] projection = {"id", "name", "icon"};
        Cursor c = mDatabase.query("items", projection, null, null, null, null, null);
        int numberOfItems = c.getCount();
        c.moveToFirst();
        ArrayList itemList = new ArrayList();
        for(int i = 0; i < numberOfItems; i++) {
            MCItem item = new MCItem();
            item.name = c.getString(c.getColumnIndexOrThrow("name"));
            item.icon_dir = c.getString(c.getColumnIndexOrThrow("icon"));
            item.id = c.getString(c.getColumnIndexOrThrow("id"));
            itemList.add(item);
            c.moveToNext();
        }
        return itemList;
    }

    public String getNextIdFromTableItems(String currentPosition) {
        String nextId;

        String[] ids = currentPosition.split(":");
        if (ids.length != 2) return null;
        String currentId = ids[0];
        String currentSid = ids[1];

        String selection = "id=? and sid>?";
        String[] selectionArgs = {currentId, currentSid};
        String[] projection = {"id", "sid"};

        Cursor c = mDatabase.query("items", projection, selection, selectionArgs, null, null, "id ASC");
        if (c.getCount() == 0) {
            selection = "id>? and sid=?";
            String currentSidTmp = "0";
            selectionArgs[1] = currentSidTmp;
            c = mDatabase.query("items", projection, selection, selectionArgs, null, null, "id ASC");
            if (c.getCount() == 0) {
                return currentId + ":" + currentSid;
            }
        }
        c.moveToFirst();
        String newId = Integer.toString(c.getInt(c.getColumnIndexOrThrow("id")));
        String newSid = Integer.toString(c.getInt(c.getColumnIndexOrThrow("sid")));
        nextId = newId + ":" + newSid;
        return nextId;
    }

    public String getNameByIdFromTableItems(String currentPosition) {
        String name;

        String[] ids = currentPosition.split(":");
        if (ids.length != 2) return null;
        String currentId = ids[0];
        String currentSid = ids[1];

        String selection = "id=? and sid=?";
        String[] selectionArgs = {currentId, currentSid};
        String[] projection = {"name"};

        Cursor c = mDatabase.query("items", projection, selection, selectionArgs, null, null, "id ASC");
        c.moveToFirst();
        name = c.getString(c.getColumnIndexOrThrow("name"));
        return name;
    }

    public String getIconDirByIdFromTableItems(String currentPosition) {
        String iconDir;

        String[] ids = currentPosition.split(":");
        if (ids.length != 2) return null;
        String currentId = ids[0];
        String currentSid = ids[1];

        String selection = "id=? and sid=?";
        String[] selectionArgs = {currentId, currentSid};
        String[] projection = {"icon_dir"};

        Cursor c = mDatabase.query("items", projection, selection, selectionArgs, null, null, "id ASC");
        c.moveToFirst();
        iconDir = c.getString(c.getColumnIndexOrThrow("icon_dir"));
        return iconDir;
    }

    public int isThisItemComposable(String currentPosition) {
        int composable;

        String[] ids = currentPosition.split(":");
        if (ids.length != 2) return -1;
        String currentId = ids[0];
        String currentSid = ids[1];

        String selection = "id=? and sid=?";
        String[] selectionArgs = {currentId, currentSid};
        String[] projection = {"composable"};

        Cursor c = mDatabase.query("items", projection, selection, selectionArgs, null, null, "id ASC");
        c.moveToFirst();
        composable = c.getInt(c.getColumnIndexOrThrow("composable"));
        return composable;
    }

    @Override
    public synchronized void close() {
        if(mDatabase != null) {
            mDatabase.close();
        }
        super.close();
    }

    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {

    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int i1) {

    }
}
