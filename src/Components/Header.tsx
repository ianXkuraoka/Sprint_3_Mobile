import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  title: string;
  username?: string;
  showBack?: boolean;
  showLogout?: boolean;
  onBackPress?: () => void;
  onLogoutPress?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title, username, showBack, showLogout, onBackPress, onLogoutPress
}) => (
  <View style={styles.header}>
    <View style={styles.left}>
      {showBack && (
        <TouchableOpacity onPress={onBackPress}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      )}
      <View style={{ marginLeft: showBack ? 12 : 0 }}>
        <Text style={styles.title}>{title}</Text>
        {username && <Text style={styles.subtitle}>{username}</Text>}
      </View>
    </View>
    {showLogout && (
      <TouchableOpacity onPress={onLogoutPress}>
        <Ionicons name="log-out-outline" size={24} color="white" />
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
  },
  subtitle: {
    color: '#ccc',
    fontSize: 14,
  },
});
