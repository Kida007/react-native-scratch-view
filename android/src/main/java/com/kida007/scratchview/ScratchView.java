package com.kida007.scratchview;

import android.graphics.Bitmap;
import android.graphics.drawable.Drawable;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.bumptech.glide.Glide;
import com.bumptech.glide.request.target.CustomTarget;
import com.bumptech.glide.request.transition.Transition;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.google.gson.Gson;
import com.nativemodules.utils.ScratchViewData;

import java.util.Map;

import javax.annotation.Nonnull;

public class ScratchView extends SimpleViewManager<ScratchNativeView>
{

    private static ThemedReactContext reactContext ;

    @Override
    public String getName() {
        return "ScratchView";
    }

    @Override
    protected ScratchNativeView createViewInstance(@Nonnull ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        ScratchNativeView scratchImageView = new ScratchNativeView(reactContext);
        return  scratchImageView;
    }

    @ReactProp(name="data")
    public void setData(ScratchNativeView view, String data){

        Gson gson = new Gson();
        ScratchViewData scratchViewData = gson.fromJson(data, ScratchViewData.class);

        view.setStrokeWidth(scratchViewData.spotRadius);

        Glide.with(reactContext)
                .asBitmap()
                .load(scratchViewData.uri)
                .into(new CustomTarget<Bitmap>() {
                    @Override
                    public void onResourceReady(@NonNull Bitmap resource, @Nullable Transition<? super Bitmap> transition) {


                        view.post(new Runnable() {
                            @Override
                            public void run() {
                                view.setScratchBitmap(resource, view.getWidth(), view.getHeight());
                            }
                        });

                    }

                    @Override
                    public void onLoadCleared(@Nullable Drawable placeholder) {
                    }
                });


        view.setRevealListener(new ScratchNativeView.IRevealListener() {
            @Override
            public void onRevealed(ScratchNativeView iv) {
                WritableMap map = Arguments.createMap();
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(view.getId(), "onRevealed", map);
            }

            @Override
            public void onRevealPercentChangedListener(ScratchNativeView siv, float percent) {
                if(percent>=scratchViewData.autoRevealPercentage) siv.clear();
            }
        });



    }


    @javax.annotation.Nullable
    @Override
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.of("onRevealed", MapBuilder.of("registrationName","onRevealed"));
    }
}


