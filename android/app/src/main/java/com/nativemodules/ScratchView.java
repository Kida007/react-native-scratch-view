package com.nativemodules;

import android.graphics.Bitmap;
import android.graphics.drawable.Drawable;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.bumptech.glide.Glide;
import com.bumptech.glide.request.target.CustomTarget;
import com.bumptech.glide.request.transition.Transition;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

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

    @ReactProp(name="couponImage")
    public void setCouponImage(ScratchNativeView view, String uri){

        Glide.with(reactContext)
                .asBitmap()
                .load(uri)
                .into(new CustomTarget<Bitmap>() {
                    @Override
                    public void onResourceReady(@NonNull Bitmap resource, @Nullable Transition<? super Bitmap> transition) {
                        view.setScratchBitmap(resource);
                    }

                    @Override
                    public void onLoadCleared(@Nullable Drawable placeholder) {
                    }
                });



    }
}


