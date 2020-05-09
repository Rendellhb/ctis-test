import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import getPhotos from '../../services/HomeService';
import { colors } from '../../styles';
import { GridRow } from '../../components';

const photoSize = Dimensions.get('window').width /2;

export default function HomeView() {
  const [groupedData, setGroupedData] = useState([]);


  useEffect(() => {
    async function obtainPhotos() {
      const data = await getPhotos();
      setGroupedData(GridRow.groupByRows(data.data, 2));
    }

    obtainPhotos()
  });

  const renderRow = rowData => {
    const cellViews = rowData.item.map(item => (
      <View style={styles.itemOneImageContainer}>
        <Image style={styles.itemOneImage} source={{ uri: item.thumbnailUrl }} />
      </View>
    ));
    return (
      <View style={styles.itemOneRow}>
        {cellViews}
      </View>
    );
  };

  return groupedData.length ? (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item =>
          item.id
            ? item.id
            : `${item[0] && item[0].id}`
        }
        style={{ backgroundColor: colors.white }}
        data={groupedData}
        renderItem={renderRow}
      />
    </View>
  ) :
  (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  itemOneContainer: {
    flex: 1,
  },
  itemOneImageContainer: {
    height: photoSize,
    width: photoSize,
    overflow: 'hidden',
    alignItems: 'center',
  },
  itemOneImage: {
    height: photoSize,
    width: photoSize,
  },
  itemOneRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  }
});