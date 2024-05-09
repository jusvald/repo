import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minimeteo';
  nome: any;
  temp: any;
  clouds: any;
  desc: any;
  feelslike: any;
  apikey = '';
  loading = false;

  constructor() {}

  ngOnInit() {}
  traduciDesc(desc: string): string {
    const traduzioni: {[key: string]: string} = {
        "clear sky": "cielo sereno",
        "few clouds": "poche nuvole",
        "scattered clouds": "nuvole sparse",
        "broken clouds": "nuvoloso",
        "overcast clouds": "nuvoloso",
        "mist": "nebbia",
        "smoke": "fumo",
        "haze": "foschia",
        "sand, dust whirls": "sabbia, vortici di polvere",
        "fog": "nebbia",
        "sand": "sabbia",
        "dust": "polvere",
        "volcanic ash": "cenere vulcanica",
        "squalls": "raffiche di vento",
        "tornado": "tornado",
        "light rain": "pioggia leggera",
        "moderate rain": "pioggia moderata",
        "heavy intensity rain": "pioggia intensa",
        "very heavy rain": "pioggia molto intensa",
        "extreme rain": "pioggia estrema",
        "freezing rain": "pioggia ghiacciata",
        "light intensity shower rain": "pioggia leggera intermittente",
        "shower rain": "pioggia intermittente",
        "heavy intensity shower rain": "pioggia intensa intermittente",
        "ragged shower rain": "pioggia intermittente irregolare",
        "light snow": "neve leggera",
        "snow": "neve",
        "heavy snow": "neve intensa",
        "sleet": "nevischio",
        "shower sleet": "pioggia mista a nevischio",
        "light rain and snow": "pioggia e neve leggere",
        "rain and snow": "pioggia e neve",
        "light shower snow": "neve leggera intermittente",
        "shower snow": "neve intermittente",
        "heavy shower snow": "neve intensa intermittente"
    };

    
    if (traduzioni.hasOwnProperty(desc)) {
        return traduzioni[desc];
    } else {
        return desc;
    }
}
getIcon(desc: string): string {
  switch(desc) {
    case 'clear sky':
      return '<i class="fas fa-sun"></i>'; 
    case 'few clouds':
    case 'scattered clouds':
    case 'broken clouds':
    case 'overcast clouds':
      return '<i class="fas fa-cloud"></i>'; 
    case 'mist':
    case 'smoke':
    case 'haze':
    case 'sand, dust whirls':
    case 'fog':
    case 'sand':
    case 'dust':
    case 'volcanic ash':
    case 'squalls':
    case 'tornado':
      return '<i class="fas fa-smog"></i>'; 
    case 'light rain':
    case 'moderate rain':
    case 'heavy intensity rain':
    case 'very heavy rain':
    case 'extreme rain':
    case 'freezing rain':
    case 'light intensity shower rain':
    case 'shower rain':
    case 'heavy intensity shower rain':
    case 'ragged shower rain':
      return '<i class="fas fa-cloud-showers-heavy"></i>'; 
    case 'light snow':
    case 'snow':
    case 'heavy snow':
    case 'sleet':
    case 'shower sleet':
    case 'light rain and snow':
    case 'rain and snow':
    case 'light shower snow':
    case 'shower snow':
    case 'heavy shower snow':
      return '<i class="fas fa-snowflake"></i>'; 
    default:
      return ''; 
  }
}



  prendiMeteo(citta: any) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+citta+'&appid='+this.apikey+'60c08cb918438e418245a6d4ba83d492')
    .then(response => response.json())
    .then(data => {
    
      this.temp = (data['main']['temp'] - 273.15).toFixed(1) + '°C';
      this.nome = data['name'];
      this.desc = data['weather'][0]['description'];
      this.clouds = data['clouds']['all'] + '% ';
      this.feelslike = (data['main']['feels_like'] - 273.15).toFixed(1) + '°C';
      
      this.loading = true;
    });
}}

