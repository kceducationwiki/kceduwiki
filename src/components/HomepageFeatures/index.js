import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Thông tin thiết bị chi tiết',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Tìm hiểu đầy đủ thông số kỹ thuật, hướng dẫn sử dụng và kinh nghiệm thực tế với các thiết bị như
         Snapmaker Artisan và Anycubic Kobra S1 Combo 
        – tất cả trong một nơi duy nhất.
      </>
    ),
  },
  {
    title: 'Tài liệu học tập và vận hành',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Cung cấp giáo trình, quy trình vận hành, quy định an toàn và tài nguyên học tập phục vụ 
        cho hoạt động nghiên cứu và thực hành.
      </>
    ),
  },
  {
    title: 'Hướng dẫn lắp đặt & bảo trì',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Từng bước lắp ráp, hiệu chỉnh, bảo dưỡng định kỳ và khắc phục sự cố cho các thiết bị công nghệ cao – 
        giúp bạn tiết kiệm thời gian và đảm bảo hiệu suất hoạt động.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
