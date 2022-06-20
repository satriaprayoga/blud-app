import './sidebar.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import { AccountBalance, AccountBalanceWallet, AccountTree, ApartmentOutlined, Assignment, BookmarkAddedOutlined, BookmarkOutlined, PersonOutline, PointOfSaleOutlined, Settings, ShoppingCartOutlined, SummarizeOutlined } from '@mui/icons-material';
import {Link} from 'react-router-dom';

function Sidebar(){
    return (
        <div className="sidebar">
             <div className='top'>
                <span className="logo">Kevin De Blud</span>
             </div>
             <hr />
             <div className='center'>
                 <ul>
                     <Link to='/' style={{textDecoration:'none'}}>
                     <li>
                         <DashboardIcon className="icon"/>
                         <span>Dashboard</span>
                     </li>
                     </Link>
                     <p className="title">ADMINISTRATOR</p>
                     <li>
                         <PersonOutline className="icon"/>
                         <span>Pengguna</span>
                     </li>
                     <li>
                         <AccountTree className="icon"/>
                         <span>Akun</span>
                     </li>
                     <li>
                         <AccountBalance className="icon"/>
                         <span>Bank</span>
                     </li>
                     <li>
                         <Settings className='icon'/>
                         <span>Konfigurasi</span>
                     </li>
                     <p className="title">PENGATURAN BLUD</p>
                     <Link to='/satker' style={{textDecoration:'none'}}>
                     <li>
                         <ApartmentOutlined className="icon"/>
                         <span>Unit Organisasi</span>
                     </li>
                     </Link>
                     <li>
                         <AccountBalanceWallet className="icon"/>
                         <span>Saldo Awal</span>
                     </li>
                     <li>
                         <Assignment className="icon"/>
                         <span>RBA</span>
                     </li>
                     <p className="title">TRANSAKSI BLUD</p>
                     <li>
                         <ShoppingCartOutlined className="icon"/>
                         <span>Belanja</span>
                     </li>
                     <li>
                         <PointOfSaleOutlined className="icon"/>
                         <span>Pendapatan</span>
                     </li>
                     <li>
                         <BookmarkAddedOutlined className="icon"/>
                         <span>Pengajuan SP3B</span>
                     </li>
                     <p className="title">LAPORAN BLUD</p>
                     <li>
                         <BookmarkOutlined className="icon"/>
                         <span>Pembukuan</span>
                     </li>
                     <li>
                         <SummarizeOutlined className="icon"/>
                         <span>Register SP3B</span>
                     </li>
                 </ul>
             </div>
             <div className="bottom">
                 
             </div>
        </div>
        )
}

export default Sidebar;