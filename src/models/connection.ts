import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';
export const createDatabaseConnection = async () => {
    return mysql.createPool({
        host     : 'easemyweb.com',
        user     : 'easemyweb_koushal',
        password : 'koushalsethi#@',
        database : 'hereweare'
    });
  };


