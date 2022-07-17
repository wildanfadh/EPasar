import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Button,
} from 'react-native';
import {Box} from 'native-base';
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getProductsRequest} from '../../redux/actions/products.action';

const BerandaScreen = ({productsModel, dispatch}) => {
  const [limit, setLimit] = useState(5);

  const requestProducts = () => {
    dispatch(getProductsRequest({limit}));
  };

  useEffect(() => {
    requestProducts();
    fetchMoreProducts();
  }, [limit]);

  const fetchMoreProducts = () => {
    if (!productsModel.listEndReached && !productsModel.moreLoading) {
      setLimit(limit + 5);
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <Box
        key={index}
        width="100%"
        height="50px"
        backgroundColor="indigo"
        my="10px">
        <Text>
          {item.id} {item.title}
        </Text>
      </Box>
    );
  };

  const renderHeader = () => <Text>RN News</Text>;

  const renderFooter = () => (
    <View>
      {productsModel.moreLoading && <ActivityIndicator />}
      {productsModel.listEndReached && (
        <Text>No more articles at the moment</Text>
      )}
    </View>
  );

  const renderEmpty = () => (
    <View>
      <Text>No Data at the moment</Text>
      <Button onPress={() => fetchMoreProducts()} title="Refresh" />
    </View>
  );

  return (
    <SafeAreaView>
      {productsModel.loading ? (
        <View>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{flexGrow: 1}}
          data={productsModel.products}
          renderItem={({item, index}) => renderItem({item, index})}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          ListEmptyComponent={renderEmpty}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMoreProducts}
        />
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    productsModel: state.products,
  };
};

export default connect(mapStateToProps)(BerandaScreen);
