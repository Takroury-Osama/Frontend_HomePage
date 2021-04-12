import './App.css';
import Header from './mainComponents/header'
import SecondNav from './static/secondNav'
import VerticalNav from './static/verticalNav'
import SendEmail from './static/sendEmail'
import CardBooking from './mainComponents/cardBooking'
import Collections from './mainComponents/collections'
import RestuandCafe from './mainComponents/restuandcafe'
import Footer from './mainComponents/footer'
import EmailBox from './static/emailBox'


function App() {
  return (
<>
    <div id="all-Page">
      <Header />
      <SecondNav />

      <EmailBox />

      <VerticalNav />
      <SendEmail />

      <CardBooking />

      <Collections />

      <RestuandCafe />

      <Footer />
    </div>
    </>
  );
}

export default App;
