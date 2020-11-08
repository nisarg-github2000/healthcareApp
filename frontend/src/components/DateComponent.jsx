import React from 'react';
import {Button} from 'react-native';
import {BackdropContext, DatePicker} from 'react-native-propel-kit';



const DateComponent = () => {
  const [date, setDate] = useState(new Date());
  return (
    <View>
      <Text style={{color: 'white', marginBottom: 12}}>Value: {date.toISOString()}</Text>
      <DatePicker title="Pick a date" value={date} onChange={setDate} />
    </View>
  );
};

export default DateComponent;
