import React from "react";
import {Image} from 'react-native';

export const createTabBarIcon = (imagePath, selectedColor, defaultColor) => {
    return ({ focused, color, size }) => (
      <Image
        source={imagePath} // Đường dẫn của hình ảnh icon trong thư mục assets
        style={{
          width: size,
          height: size,
          tintColor: focused ? selectedColor : color,
        }}
      />
    );
  };

  export const FirstTabIcon = createTabBarIcon(
    require('../assets/TabIcon1.png'),
    'blue',
    'gray'
  );

  export const SecondTabIcon = createTabBarIcon(
    require('../assets/TabIcon2.png'),
    'blue',
    'gray'
  );

  export const ThirdTabIcon = createTabBarIcon(
    require('../assets/TabIcon3.png'),
    'blue',
    'gray'
  );

  export const fourthTabIcon = createTabBarIcon(
    require('../assets/TabIcon4.png'),
    'blue',
    'gray'
  );
  export const fifthTabIcon = createTabBarIcon(
    require('../assets/TabIcon5.png'),
    'blue',
    'gray'
  );

