package com.weex.sammy.mcshop;

import android.app.Application;
import android.content.Context;

import com.taobao.weex.InitConfig;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

/**
 * Created by sammy on 2016/11/25.
 */

public class WeexApplication extends Application {
    private static WeexApplication instance;
    public WeexApplication() {
        instance = this;
    }
    @Override
    public void onCreate() {
        super.onCreate();
        initDebugEnvironment(true, "192.168.1.105");
        InitConfig config = new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build();
        try {
            WXSDKEngine.registerModule("sqlitemodule", SqliteModule.class);
        } catch (WXException e) {
            e.printStackTrace();
        }
        WXSDKEngine.initialize(this, config);
    }
    public static Context getContext() {
        return instance;
    }

    private void initDebugEnvironment(boolean enable, String host) {
        WXEnvironment.sRemoteDebugMode = enable;
        WXEnvironment.sRemoteDebugProxyUrl = "ws://" + host + ":8088/debugProxy/native";
    }
}
