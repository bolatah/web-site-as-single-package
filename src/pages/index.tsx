import { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { FormattedMessage } from "react-intl";
import { isMobile } from "react-device-detect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComputer,
  faLanguage,
  faGraduationCap,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/custom.module.css";

type ImageProps = {
  ratio: number;
  src: string;
  alt: string;
};

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      xys: [0, 0, 1],
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 },
    };
  });

  return (
    <animated.div
      ref={ref}
      className={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        const x =
          clientX -
          (ref.current!.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        const y =
          clientY -
          (ref.current!.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        const dampen = 50;
        const xys = [
          -(y - ref.current!.clientHeight / 2) / dampen,
          (x - ref.current!.clientWidth / 2) / dampen,
          1.07,
        ];

        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        zIndex: isHovered ? 2 : 1,
        transform: animatedProps.xys.to(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        ),
      }}
    >
      {children}
    </animated.div>
  );
};

const Image = ({ ratio, src, alt }: ImageProps) => {
  return (
    <div>
      <div className={styles.imageInnerContainer}>
        <div>
          <img className={styles.image} src={src} alt={alt} />
        </div>
      </div>
    </div>
  );
};

const cards = [
  {
    title: <FormattedMessage id="it_skills" />,
    icon: <FontAwesomeIcon icon={faComputer} bounce pull="right" />,
    description: (
      <ul>
        <li>
          JavaScript, React.js, React Native, node.js, Next.js, Redux,
          TypeScript, Docker, SQL, NoSQL
        </li>
        <li>Python (pandas, Numpy, Matplotlib, seaborn, Dash etc.)</li>
        {/* <li>SAP Finance & Controlling</li> */}
      </ul>
    ),
    image: "ITSkills.svg",
    alt: `IT-Skills`,
    imageRatio: 784 / 1016,
  },
  {
    title: <FormattedMessage id="language_skills" />,
    icon: <FontAwesomeIcon icon={faLanguage} bounce pull="right" />,
    description: (
      <ul>
        <li>
          <FormattedMessage id="english" />
        </li>
        <li>
          <FormattedMessage id="german" />
        </li>
        <li>
          <FormattedMessage id="spanish" />
        </li>
        <li>
          <FormattedMessage id="turkish" />
        </li>
      </ul>
    ),
    image: "International-Peace-Dove.svg",
    alt: `Language-Skills`,
    imageRatio: 839 / 1133,
  },
  {
    title: <FormattedMessage id="certificates_education" />,
    icon: <FontAwesomeIcon icon={faGraduationCap} bounce pull="right" />,
    description: (
      <>
        <ul>
          <li>
            <a href="https://www.credly.com/badges/b77d747a-0362-486c-b701-c7d5ea30f955">
              IBM Data Science Professional Certificate
            </a>
          </li>
          <li>
            <a href="https://www.credly.com/badges/e0f3d596-1ebe-4692-a99f-197d9b4ca2b3">
              Google IT Support Professional Certificate
            </a>
          </li>
          <li>
            <a href="https://www.coursera.org/account/accomplishments/certificate/K7JRRWY9ZLSV">
              Front-End Web Development with React
            </a>
          </li>
          <li>
            <a href="https://www.coursera.org/account/accomplishments/certificate/PVM9F9DS7CY4">
              Server-side Development with NodeJS, Express and MongoDB
            </a>
          </li>
          {!isMobile ? (
            <a href="https://www.linkedin.com/in/ahmet-b-01196183/details/certifications/">
              <FontAwesomeIcon
                size="xs"
                icon={faArrowRightLong}
                style={{ marginRight: "1rem" }}
              />
              <FormattedMessage id="more_certificates" />
            </a>
          ) : (
            <a href="https://www.linkedin.com/in/ahmet-b-01196183/">
              <FontAwesomeIcon
                size="xs"
                icon={faArrowRightLong}
                style={{ marginRight: "1rem" }}
              />
              <FormattedMessage id="more_certificates" />
            </a>
          )}
        </ul>
        <ul style={{ listStyleType: "circle " }}>
          <li>
            <FormattedMessage id="master" />
          </li>
          <li>
            <FormattedMessage id="bachelor" />
          </li>
        </ul>
      </>
    ),
    image: "",
    alt: ``,
    imageRatio: 0 / 1030,
  },
];

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.row}>
          {cards.map((card, i) => (
            <div className={styles.column} key={i}>
              <Card>
                <span className={styles.cardIcon}>{card.icon} </span>
                <span className={styles.cardTitle}> {card.title}</span>

                <div className={styles.cardBody}>{card.description}</div>
                <Image
                  ratio={card.imageRatio}
                  src={card.image}
                  alt={card.alt}
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
