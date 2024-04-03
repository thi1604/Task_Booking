
import './App.css';
import './Booking/Ex';
import MyEx from './Booking/Ex.js';
import Green from './Booking/green.js';
import Red from './Booking/red';
import Pink from './Booking/pink';

function App() {
  const Ghe = () => {
    const Chair = [];
    for (let i = 0; i < 14; i++) {
      for (let j = 0; j < 25; j++) {
        if (i < 4)
          Chair.push(<Green key={i} />);
        else if (i < 13)
          Chair.push(<Red key={i} />);
        else
          Chair.push(<Pink key={i} />);
      }
    }
    return Chair;
  }
  return (
    <div className="Main">
      <div className="Booking">
        Booking Online
      </div>
      <div className="top_content">
        <p>
          CGV Hùng Vương Plaza | Cinema 6 | Số ghế (260/262) <br />
          02/04/2024 11:00 ~ 02/04/2024 13:20
        </p>
      </div>
      <div className="Nguoi_ghe">
        Người / Ghế
      </div>
      <div className="Screen">
        <img src='https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-screen.png'>
        </img>
      </div>
      <div className='Chairs'>
        {
          Ghe()
        }
      </div>
      <div className='Icons-notice'>
        <div className='Icons'>
          <div className='icon_checked'>
            <div className='Box'></div>
            Checked
          </div>
          <div className='icon_occupied'>
            <div className='Box'></div>
            Đã chọn
          </div>
          <div className='icon_unavailable'>
            <div className='Box'>X</div>
            Không thể chọn
          </div>
        </div>
        <div className='Icons'>
          <div className='icon-zone-standard'>
            <div className='Box'></div>
            Thường
          </div>
          <div className='icon-zone-vip'>
            <div className='Box'></div>
            Vip
          </div>
          <div className='icon-zone-sw'>
            <div className='Box'></div>
            Sweetbox
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
