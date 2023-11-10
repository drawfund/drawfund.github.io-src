import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
		<img src="/img/domain_for_sale.webp" />
		<Heading as="h1" className="hero__title">
          域名Draw.Fund出售
        </Heading>
        <Heading as="h1" className="hero__title">
          Draw.Fund is for sale!
        </Heading>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://wanwang.aliyun.com/nametrade/domainshow?spm=5176.100251.102.9.35d14f15zjeBa8&domain=draw.fund">
            您可以在“阿里云域名交易平台”直接购买 👆🏻
          </Link>
        </div>
        <br />
        <p className="hero__subtitle">您的报价若低于10万元，卖方不回复</p>
        <p className="hero__subtitle">联系微信：drawfund</p>
        <p className="hero__subtitle">电子邮件：founder@draw.fund</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Draw.Fund is for sale!`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
