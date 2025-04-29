import React from "react";
import { Tabs } from "expo-router";
import { useAppTheme } from "@/store/theme-store";
import { colors } from "@/constants/colors";
import { Home, BookOpen, Award, User } from "lucide-react-native";

export default function TabLayout() {
  const theme = useAppTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors[theme].primary,
        tabBarInactiveTintColor: colors[theme].muted,
        tabBarStyle: {
          backgroundColor: colors[theme].card,
          borderTopColor: colors[theme].border,
        },
        headerStyle: {
          backgroundColor: colors[theme].primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Ana Sayfa",
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          title: "Kurslar",
          tabBarIcon: ({ color, size }) => <BookOpen size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="achievements"
        options={{
          title: "Başarılar",
          tabBarIcon: ({ color, size }) => <Award size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}