import React, {useState} from 'react';
import {Text, SectionList, View, Image, TouchableOpacity} from 'react-native';
import {sessions} from '../data/sessions.json';
import styles from './styles/sharedStyles';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';

function Sessions() {
  return (
    <View>
      <SectionList
        sections={sessions}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(_, index) => index}
        ItemSeparatorComponent={SeparatorComponent}
        ListFooterComponent={Footer}
        ListHeaderComponent={HeaderComponent}
      />
    </View>
  );
}

const renderSectionHeader = ({section}) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>{section.title}</Text>
  </View>
);

const SessionsList = ({id, name, speaker, desc, level, room}) => {
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{'Session: ' + name}</Text>
      <Text style={styles.sectionDescription}>{'Speaker: ' + speaker}</Text>
      <TouchableOpacity onPress={() => setMoreInfo(!moreInfo)}>
        <Text style={styles.clickableText}>
          {moreInfo ? 'Hide Details' : 'Show More Details'}
        </Text>
      </TouchableOpacity>
      {moreInfo && (
        <>
          <Text style={styles.sectionDescription}>{'Details: ' + desc}</Text>
          <Text style={styles.sectionDescription}>{'Room: ' + room}</Text>
          <Text style={styles.sectionDescription}>{'Level: ' + level}</Text>
        </>
      )}
    </View>
  );
};

const renderItem = ({item, index}) => (
  <View>
    <SessionsList
      id={index}
      name={item.title}
      desc={item.description}
      speaker={item.speakers[0].name}
      level={item.level}
      room={item.room}
    />
  </View>
);

const SeparatorComponent = () => {
  return <View style={styles.separator} />;
};

const HeaderComponent = () => (
  <Header
    image={require('../images/sec2.jpg')}
    heading={'Awesome Sessions'}
    style={styles.sectionTitle}
  />
);

export default Sessions;
