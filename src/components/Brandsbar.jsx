import google from '../assets/logos_google.png';
import trello from '../assets/Trello-logo-blue.png';
import monday from '../assets/logos_monday.png';
import notion from '../assets/Notion.png';
import slack from '../assets/Slack.png';

export default function BrandsBar() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center md:justify-around gap-8 md:gap-6 py-8 px-6 bg-white border-t border-b border-green-50">

        {/* Google */}
        <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
          <img src={google} alt="google logo" className="h-6 md:h-8 object-contain" />
        </div>

        {/* Trello */}
        <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
          <img src={trello} alt="trello" className="h-6 md:h-8 object-contain" />
        </div>

        {/* Monday.com */}
        <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
          <img src={monday} alt="monday" className="h-6 md:h-8 object-contain" />
        </div>

        {/* Notion */}
        <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
          <img src={notion} alt="notion" className="h-6 md:h-8 object-contain" />
        </div>

        {/* Slack */}
        <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
          <img src={slack} alt="slack" className="h-6 md:h-8 object-contain" />
        </div>

      </div>

      <div className="py-4 bg-[#D7F5DC]"></div>
    </>
  );
}