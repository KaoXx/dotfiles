#!/bin/sh

target=$(cat ~/.config/bin/target)

if [ $target ]; then
    echo "%{F#e51d0b}什%{F#ffffff} $target%{u-}"
else
    echo "%{F#e51d0b} %{u-}%{F#e51d0b}No target"
fi
