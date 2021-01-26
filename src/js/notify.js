import { defaultModules, error } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';

export default function notify () {
    defaultModules.set(PNotifyMobile, {});

    error({
        title: 'Too many matches found. Please enter a more specific query!'
      });
    
} 