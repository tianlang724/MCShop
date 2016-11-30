package com.weex.sammy.mcshop;

import android.app.Service;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteException;
import android.widget.Toast;

import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.common.WXModuleAnno;

import java.io.IOException;
import java.util.List;

/**
 * Created by sammy on 2016/11/26.
 */

public class SqliteModule extends WXModule{

    @WXModuleAnno
    public void getAllEntriesFromTableItems(JSCallback callback) {
        List<MCItem> list = MainActivity.sqliteHelper.getAllEntriesFromTableItems();
        callback.invoke(list);
    }

    @WXModuleAnno
    public void getAllItemFromShoppingList(JSCallback callback) {
        List<MCItem> items = MCShoppingListHelper.mShoppingList;
        if(items.isEmpty()) {
            callback.invoke("null");
        }
        callback.invoke(items);
    }

    @WXModuleAnno
    public void insertItemToShoppingList(MCItem item, JSCallback callback) {
        MCShoppingListHelper.insertItemToShoppingList(item);
        callback.invoke("added");
    }

    @WXModuleAnno
    public void showItemNumber(MCItem item, JSCallback callback) {
        int number = MCShoppingListHelper.showItemNumber(item);
        callback.invoke(number);
    }

    @WXModuleAnno
    public void showItemNumberInShoppingList(JSCallback callback) {
        int number = MCShoppingListHelper.mShoppingList.size();
        callback.invoke(number);
    }

    @WXModuleAnno
    public void logToast(String info) {
        Toast.makeText(mWXSDKInstance.getContext(), info, Toast.LENGTH_SHORT).show();
    }
}
