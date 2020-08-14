package com.hellobiskitrn;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ConsoleModule extends ReactContextBaseJavaModule {
    final private static String TAG = "Console";
    private final ReactApplicationContext reactContext;

    public ConsoleModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return TAG;
    }

    @ReactMethod
    public void writeText(String text, final Callback cb) {
        if( text.equals(("Error"))){
            cb.invoke("Text is Error", null);
        }else{
            cb.invoke(null, text);
        }
    }

    @ReactMethod
    public void writeTextWithPromise(String text, Promise promise) {
        if( text.equals("Error")){
            promise.reject("Error", "Text is Error");
        } else {
            promise.resolve(text);
        }
    }

}
