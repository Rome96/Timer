import React, { useState, useEffect } from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import { setSeconds } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Timer = () => {
  const dispatch = useDispatch();
  const [reset, setReset] = useState(true);
  const seconds = useSelector((state) => state.seconds);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      dispatch(setSeconds(seconds + 1));
    }, 1000);
    if (!reset && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [reset, seconds]);

  const resetTimer = () => {
    dispatch(setSeconds(0));
    setReset(true);
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>{seconds}</Text>
      <TouchableOpacity
        onPress={() => resetTimer()}
        style={{
          paddingVertical: 10,
          paddingHorizontal: 30,
          backgroundColor: "#e97171",
        }}
      >
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Timer;
