import  express  from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import DefaultData from './default.js';
import Routes from './routes/route.js'
import dotenv from 'dotenv';
import {v4 as uuid} from "uuid"

dotenv.config();

const app = express()
const PORT = process.env.PORT || 8000

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD
const URL =  process.env.MONGODB_URI  ||    `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.zrhhgh1.mongodb.net/flipkart-clone?retryWrites=true&w=majority` 

// const port = process.env.PORT || 5000;
Connection(URL)
app.listen(PORT , () => console.log(`Server running on port ${PORT} 🔥`));
DefaultData();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);


export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
// niche wala custid use karne se thoda late hojata hai
// paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'https://flipkart-clone-6ikd.onrender.com/callback'
paytmParams['EMAIL'] = 'asheesh426344@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'

// i got this from paytm interfacewebpage
// paytmParams["TOKEN"]      = "eyJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..xxxxxxxxxxx.9iHTtWbCZ0I6qbn2sUnyz5siw1fqbmtEnFMFE7nSIX-yrwCkiGfAC6QmPr9q-tw8LMPOh5-3UXRbpeVZEupQd3wNyaArWybRX2HAxJDRD8mxJ_wxzJM6GZ1ov4O3EIsx2Y_Zr0aHCd3VbnTjRUnlVdxXJPFG8QZs0b_2TVdoAX3_QjZS8_dwcmIWoH8ebDzOIs7MJacETfMtyFGAo8Xc0LjznToUWvTsTbIXQoF1yB0.1fZFAYJVsY61BTv2htLcXQ8800";



