import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button
} from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winstonQuotes: [
        "We shape our dwellings, and afterwards our dwellings shape us.",
        "It has been said that Democracy is the worst form of government except all those other forms that have been tried from time to time.",
        "It is a mistake to try to look too far ahead. The chain of destiny can only be grasped one link at a time.",
        "When I am abroad, I always make it a rule never to criticize or attack the government of my own country. I make up for lost time when I come home.",
        "I have nothing to offer but blood, toil, tears and sweat.",
        "Dictators ride to and fro on tigers from which they dare not dismount. And the tigers are getting hungry.",
        "Employ your time in improving yourself by other men’s writings so that you shall come easily by what others have labored hard for.",
        "I have never accepted what many people have kindly said, namely that I have inspired the nation. It was the nation and the race dwelling all around the globe that had the lion heart. I had the luck to be called upon to give the roar.",
        "Without a measureless and perpetual uncertainty, the drama of human life would be destroyed.",
        "Never in the field of human conflict was so much owed by so many to so few.",
        "An appeaser is one who feeds a crocodile – hoping it will eat him last.",
        "Say what you have to say and the first time you come to a sentence with a grammatical ending – sit down.",
        "It is no use saying ‘we are doing our best.’ You have got to succeed in doing what is necessary.",
        "Let us therefore brace ourselves to our duties, and so bear ourselves that, if the British Empire and its Commonwealth last for a thousand years, men will still say: This was their finest hour.",
        "Do not let us speak of darker days; let us speak rather of sterner days. These are not dark days: these are great days – the greatest days our country has ever lived. ",
        "The English know how to make the best of things. Their so-called muddling through is simply skill at dealing with the inevitable.",
        "War is mainly a catalogue of blunders.",
        "In war, as in life, it is often necessary, when some cherished scheme has failed, to take up the best alternative open, and if so, it is folly not to work for it with all your might.",
        "No one can guarantee success in war, but only deserve it.",
        "If one has to submit, it is wasteful not to do so with the best grace possible.",
        "All the great things are simple, and many can be expressed in a single word: freedom; justice; honor; duty; mercy; hope.",
        "Curse ruthless time! Curse our mortality. How cruelly short is the allotted span for all we must cram into it!",
        "We must beware of needless innovations, especially when guided by logic.",
        "One ought never to turn one’s back on a threatened danger and try to run away from it. If you do that, you will double the danger. But if you meet it promptly and without flinching, you will reduce the danger by half. Never run away from anything. Never!",
        "Success is never found. Failure is never fatal. Courage is the only thing.",
        "Victory at all costs, victory in spite of all terror, victory however long and hard the hard may be; for without victory there is no survival. ",
        "We shall draw from the heart of suffering itself the means of inspiration and survival.",
        "History is written by the victors.",
        "The problems of victory are more agreeable than those of defeat, but they are no less difficult.",
        "My most brilliant achievement was my ability to be able to persuade my wife to marry me.",
        "I am prepared to meet my Maker. Whether my Maker is prepared for the ordeal of meeting me is another matter.",
        "The English never draw a line without blurring it.",
        "It is a good thing for an uneducated man to read books of quotations.",
        "The price of greatness is responsibility.",
        "There are a terrible lot of lies going about the world, and the worst of it is that half of them are true.",
        "To build may have to be the slow and laborious task of years. To destroy can be the thoughtless act of a single day.",
        "The farther backward you can look, the farther forward you are likely to see.",
        "You have enemies? Good. It means you’ve stood up for something, sometime in your life.",
        "In finance, everything that is agreeable is unsound and everything that is sound is disagreeable.",
        "If you’re going through hell, keep going.",
        "A state of society where men may not speak their minds cannot long endure.",
        "This is the lesson: never give in, never give in, never, never, never, never — in nothing, great or small, large or petty — never give in except to convictions of honour and good sense. Never yield to force; never yield to the apparently overwhelming might of the enemy.",
        "There is only one duty, only one safe course, and that is to try to be right and not to fear to do or say what you believe to be right.",
        "It is a fine thing to be honest, but it is also very important to be right.",
        "I like pigs. Dogs look up to us. Cats look down on us. Pigs treat us as equals.",
        "Never hold discussions with the monkey when the organ grinder is in the room.",
        "Attitude is a little thing that makes a big difference.",
        "The best argument against democracy is a five-minute conversation with the average voter.",
        "We shall defend our island, whatever the cost may be, we shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender.",
        "Never, never, never believe any war will be smooth and easy, or that anyone who embarks on the strange voyage can measure the tides and hurricanes he will encounter. The statesman who yields to war fever must realize that once the signal is given, he is no longer the master of policy but the slave of unforeseeable and uncontrollable events.",
        "What is adequacy? Adequacy is no standard at all.",
        "Socialism is a philosophy of failure, the creed of ignorance, and the gospel of envy, its inherent virtue is the equal sharing of misery.",
        "We make a living by what we get, but we make a life by what we give.",
        "Those who can win a war well can rarely make a good peace, and those who could make a good peace would never have won the war.",
        "It’s not enough that we do our best; sometimes we have to do what’s required.",
        "Healthy citizens are the greatest asset any country can have.",
        "We shall not fail or falter. We shall not weaken or tire. Neither the sudden shock of battle nor the long-drawn trials of vigilance and exertion will wear us down. Give us the tools and we will finish the job.",
        "Men occasionally stumble over the truth, but most of them pick themselves up and hurry off as if nothing ever happened.",
        "It is wonderful what great strides can be made when there is a resolute purpose behind them.",
        "I never worry about action, but only inaction.",
        "We are stripped bare by the curse of plenty.",
        "If you will not fight for right when you can easily win without blood shed; if you will not fight when your victory is sure and not too costly; you may come to the moment when you will have to fight with all the odds against you and only a precarious chance of survival. There may even be a worse case. You may have to fight when there is no hope of victory, because it is better to perish than to live as slaves.",
        "Great and good are seldom the same man.",
        "I always seem to get inspiration and renewed vitality by contact with this great novel land of yours which sticks up out of the Atlantic.",
        "We shall show mercy, but we shall not ask for it.",
        "Success is not final, failure is not fatal, it is the courage to continue that counts.",
        "All the greatest things are simple, and many can be expressed in a single word: freedom; justice; honour; duty; mercy; hope.",
        "Everyone has his day and some days last longer than others.",
        "Personally I’m always ready to learn, although I do not always like being taught.",
        "The first duty of the university is to teach wisdom, not a trade; character, not technicalities. We want a lot of engineers in the modern world, but we do not want a world of engineers.",
        "The inherent vice of capitalism is the unequal sharing of blessings; the inherent virtue of socialism is the equal sharing of miseries.",
        "When the eagles are silent, the parrots begin to jabber.",
        "History will be kind to me for I intend to write it.",
        "Christmas is a season not only of rejoicing but of reflection.",
        "If we open a quarrel between the past and the present, we shall find we have lost the future.",
        "Politics is the ability to foretell what is going to happen tomorrow, next week, next month and next year. And to have the ability afterwards to explain why it didn’t happen.",
        "If you have an important point to make, don’t try to be subtle or clever. Use a pile driver. Hit the point once. Then come back and hit it again. Then hit it a third time-a tremendous whack.",
        "Do not let spacious plans for a new world divert your energies from saving what is left of the old.",
        "Success is the ability to go from one failure to another with no loss of enthusiasm.",
        "All I can say is that I have taken more out of alcohol than alcohol has taken out of me.",
        "Out of intense complexities intense simplicities emerge.",
      ],
      quoteShow: '',
      counter: 0,
      width: 200,
      height: 200,
    };
    
  }
  
  numRand = () => {
    let quote = this.state.winstonQuotes[Math.floor(Math.random() * 80) + 0];
    this.setState({
      quoteShow: quote,
      counter: this.state.counter + 1,
      width: this.state.width - 3,
      height: this.state.height - 3,
    });
  }
  
  counterReset = () => {
    this.setState({
      counter: 0,
      width: 200,
      height: 200,
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        
        <Text style={{color: 'red', fontSize: 17, textAlign: 'center'}}>{this.state.quoteShow}</Text>
        <TouchableHighlight onPress={this.numRand}>
          <Image
            style={{width: this.state.width, height: this.state.height}}
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Sir_Winston_S_Churchill.jpg/220px-Sir_Winston_S_Churchill.jpg'}}
          />
        </TouchableHighlight>
        <Text style={{color: 'green', fontSize: 15, textAlign: 'center'}}>
          Dotykałeś Winstona {this.state.counter} {this.state.counter > 1 ? 'razy' : 'raz'}
        </Text>
        <Button
          onPress={this.counterReset}
          title="Resetuj Winstona"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});