import { useRecoilValue } from 'recoil';
import { sidebarIsOpenState } from 'store/atoms/sideBarIsOpenState';
import styles from './CongestBar.module.scss';

function CongestBar({ congest }: { congest: number }) {
  const isOpen = useRecoilValue(sidebarIsOpenState);
  let vari = 'succeess';
  let congestText = '매우쾌적';
  if (congest <= 20) vari = 'succeess';
  else if (congest <= 40) {
    vari = 'itsok';
    congestText = '쾌적';
  } else if (congest <= 60) {
    vari = 'botong';
    congestText = '보통';
  } else if (congest <= 80) {
    vari = 'warn';
    congestText = '혼잡';
  } else {
    vari = 'danger';
    congestText = '매우혼잡';
  }

  console.log('congestBar loading');

  return (
    <div>
      {isOpen && (
        <div className={styles['prog-wrapper']}>
          <div className={styles[`${vari}`]}>
            <progress value={congest} max={100} />
            <span className={styles.sp}>{congestText}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CongestBar;
