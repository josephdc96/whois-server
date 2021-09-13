/*
 * WHOIS Server main application file. This file defines the express server and single route for this application
 * 
 * @author Joseph Cauble (josephdc96)
 */
import express from 'express';
import validator from 'validator';
import https from 'https';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { sanitizeURL } from './url-utils';
dotenv.config();

const app = express();
const port = 3030;

/**
 * Middleware route between the WHOIS XML API and the React frontend
 */
app.get('/domain', cors(), (req, res) => {
    var url = sanitizeURL(req.query.domain.toString());
    var isDomain = validator.isFQDN(url);
    var isIP = validator.isIP(url);
    var buffer = '';
    if (isDomain || isIP) {
        https.get(`https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${process.env.API_KEY}&outputFormat=json&domainName=${url}`, r => {
            r.on('data', data => {
                buffer = buffer += data;
            })
            r.on('error', err => {
                res.status(500).json({error: err})
            })
            r.on('end', () => {
                const result = JSON.parse(buffer);
                result.isIP = isIP;
                res.send(result);
            })
        })
    } else {
        res.status(400).json({ error: 'Invalid domain or IP format. Please submit a valid domain or IP address.' })
    }
});

app.listen(port, () => {
    console.info(`Ready on port ${port}`)
})