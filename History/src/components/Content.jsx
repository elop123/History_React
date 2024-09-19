import s from '../style/Content.module.scss';
import Year_Content from './Year_Content';
import Api from './Api';


function Content() {
  return (
    <main className={s.mainStyle}>
    <Api />
    <Year_Content />
    </main>
  );
}

export default Content;
