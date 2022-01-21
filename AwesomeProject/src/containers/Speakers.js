import React, {useState} from 'react';
import {Text, FlatList, View, TextInput, Pressable, Image} from 'react-native';
import {speakers} from '../data/speakers.json';
import styles from './styles/sharedStyles.js';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';

function Speakers() {
  const [filteredSpeakers, setFilteredSpeakers] = useState(speakers);

  const getSearchText = (text) => {
    let filteredSpeakersList = speakers.filter((value) =>
      value.sessions[0].name.toLowerCase().includes(text.toLowerCase()),
    );
  };

  return (
    <View>
      <SearchSessions getSearchText={getSearchText} />
      <FlatList
        data={speakers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={SeparatorComponent}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={Footer}
        keyboardDismissMode={'on-drag'}
        keyboardShouldPersistTaps={'always'}
      />
    </View>
  );
}

const SearchSessions = (props) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    props.getSearchText(text);
  };

  const clearSearch = () => {
    this.textInput.clear();
    props.getSearchText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={searchText}
        onChangeText={(text) => handleSearch(text)}
        placeholder={'Search Sessions'}
        returnKeyType={'go'}
        ref={(ref) => (this.textInput = ref)}
      />
      <Pressable onPress={clearSearch} style={styles.clearContainer}>
        <Image
          source={require('../images/multiply-1_Orange.png')}
          style={styles.clearImage}
        />
      </Pressable>
    </View>
  );
};

const renderItem = ({item, index}) => {
  return (
    <View>
      <SpeakersList
        id={index}
        name={item.name}
        bio={item.bio}
        sesssion={item.sessions[0].name}
      />
    </View>
  );
};

const SpeakersList = ({id, name, bio, session}) => {
  return (
    <View style={styles.sectionContainer} key={id}>
      <Text style={styles.sectionTitle}>{'Speaker Name: ' + name}</Text>
      <Text style={styles.sectionDescription}>{'Bio: ' + bio}</Text>
      <Text style={styles.sectionDescriptionBold}>{'Session: ' + session}</Text>
    </View>
  );
};

const SeparatorComponent = () => {
  return <View style={styles.separator} />;
};

const HeaderComponent = () => (
  <Header
    image={require('../images/girl.png')}
    heading={'Awesome Speakers'}
    style={styles.sectionTitleGreen}
  />
);

export default Speakers;
