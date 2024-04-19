//inheritance


class ShowRoom{
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  name = 'BMW showroom';
  location = 'kyonpyaw';

  greeting() {
    return `we are ${this.name}`;
  }

  details = {
    color: 'red',
    prize: "$40000",
  };

  carBrand = [ 'BMW', 'LandRover', 'Suzuki'];
}

//////////////////
//inheritance
class SuzukiRoom extends ShowRoom{
  service = '24hrs';
  constructor(name, location, phone) {
    super(name, location);   //need to use super for parent inheritance
    this.phone = phone
  }

  alertMessage() {
    return `We are ${this.name} showroom, 
    we located at ${this.location}, our phone no is${this.phone}`
  }
};

//const data = new ShowRoom();
const data = new SuzukiRoom('Mi', 'mand', '09xxxxx');
const d = new ShowRoom('Honda', 'yangon','09dddd');

console.log(data.alertMessage())