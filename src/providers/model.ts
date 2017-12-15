export interface RequestQuery {
  pending: Array<Request>;
  accepted: Array<Request>;
  declined: Array<Request>;
}

export interface Request {
  name: string;
  type: string;
  summary: string;
  details: string;
  timestamp: number;
}

export const dummyData: RequestQuery = {
  pending: [
    {
      name: 'Virat Kohli',
      type: 'chargeback',
      summary: 'give me my chargeback',
      details: 'hey google help me with chargeback? google replied: can not help you',
      timestamp: 1513218000
    },
    {
      name: 'Sachin Tengli',
      type: 'limit',
      summary: 'increase my limit',
      details: 'hey google increase my limit? google replied: sure',
      timestamp: 1513188000
    },
    {
      name: 'Sania Mirza',
      type: 'limit',
      summary: 'increase my limit',
      details: 'hey google how do I increase my paypal limit? google replied: ...',
      timestamp: 1513288000
    }
  ],
  accepted: [{
    name: 'Saurav Ganguly',
    type: 'chargeback',
    summary: 'item not delivered',
    details: 'hey google I got a fraud item? google replied: tell me about item...',
    timestamp: 1513265000
  }],
  declined: [{
    name: 'Salman Khan',
    type: 'limit',
    summary: 'increase my limit',
    details: 'hey google I am going to travel, increase my limit? google replied: no means no, you stupid murderer',
    timestamp: 1513200000
  }]
};
