import React from "react";
import Navbar from "./component/navbar"; 
import SearchFlights from "./component/searchflights";
import RecentSearches from "./component/recentsearches";
import './App.css'
import PrepareTrip from "./component/preparetrip";
import PopularDestinations from "./component/populardestinatinos";
import RecommendedHolidays from "./component/recommendedholidays";
import PopularStays from "./component/popularstays";
import NewsletterSignup from "./component/newslettersignup";
import Footer from "./component/footer";

function App() {
  return (
    
    <div>
      <Navbar />
      <SearchFlights/>
      <RecentSearches/>
      <PrepareTrip/>
      <PopularDestinations/>
      <RecommendedHolidays/>
      <PopularStays/>
      <NewsletterSignup/>
      <Footer/>
    </div>
  );
}
export default App;
