package com.weex.sammy.mcshop;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by sammy on 2016/11/30.
 */

public class MCShoppingListHelper {
    public static List<MCItem> mShoppingList = new ArrayList<MCItem>();
    public static Map<String, String> mShoppingMap = new HashMap<String, String>();
    public static void insertItemToShoppingList(MCItem item) {
        if(mShoppingMap.containsKey(item.id)) {
            int number = Integer.parseInt(mShoppingMap.get(item.id));
            number++;
            mShoppingMap.put(item.id, Integer.toString(number));
        } else {
            mShoppingMap.put(item.id, "1");
            mShoppingList.add(item);
        }
    }
    public static int showItemNumber(MCItem item) {
        if(mShoppingMap.containsKey(item.id)) {
            int number = Integer.parseInt(mShoppingMap.get(item.id));
            number++;
            return number;
        } else {
            return 0;
        }
    }
}
