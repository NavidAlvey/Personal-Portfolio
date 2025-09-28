import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Projects } from "@/components/work/Projects";
import { about, baseURL, home, person, routes } from "@/resources";
import {
  Avatar,
  Badge,
  Button,
  Column,
  Heading,
  Line,
  Media,
  Meta,
  RevealFx,
  Row,
  Schema,
  Text,
} from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <Column fillWidth gap="24" marginBottom="s">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth paddingTop="s" paddingBottom="s" gap="12" wrap horizontal="center">
            <Row
              border="neutral-medium"
              radius="m"
              minWidth={20}
              height={11}
            >
              <Media
                enlarge
                radius="m"
                sizes="20"
                alt="Fam Selfie"
                src="/images/gallery/Fam-selfie.jpg"
              />
            </Row>
            <Row
              border="neutral-medium"
              radius="m"
              minWidth={11}
              height={11}
            >
              <Media
                enlarge
                radius="m"
                sizes="20"
                alt="Me asf"
                src="/images/avatar.jpg"
              />
            </Row>
            <Row
              border="neutral-medium"
              radius="m"
              minWidth={20}
              height={11}
            >
              <Media
                enlarge
                radius="m"
                sizes="20"
                alt="Pepsi Cola sign, NY"
                src="/images/gallery/PepsiCola.jpg"
              />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth paddingTop="m" paddingBottom="l" gap="12" wrap horizontal="center">
            <Row
              border="neutral-medium"
              radius="m"
              minWidth={20}
              height={11}
            >
              <Media
                enlarge
                radius="m"
                sizes="20"
                alt="FB Winter Photos"
                src="/images/gallery/WinterBoys.JPG"
              />
            </Row>
            <Row
              border="neutral-medium"
              radius="m"
              minWidth={20}
              height={11}
            >
              <Media
                enlarge
                radius="m"
                sizes="20"
                alt="Alvey in a BMW i8"
                src="/images/gallery/BMWi8.jpeg"
              />
            </Row>
            <Row
              border="neutral-medium"
              radius="m"
              minWidth={20}
              height={11}
            >
              <Media
                enlarge
                radius="m"
                sizes="20"
                alt="Large family photo at Nasa"
                src="/images/gallery/Nasa.JPG"
              />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Projects range={[2, 2]} />
      <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth paddingTop="m" paddingBottom="l" gap="12" wrap horizontal="center">
            <Row
              border="neutral-medium"
              radius="m"
              minWidth={20}
              height={11}
            >
              <Media
                enlarge
                radius="m"
                sizes="20"
                alt="Skelligs"
                src="/images/gallery/Skelligs.jpg"
              />
            </Row>
            <Row
              border="neutral-medium"
              radius="m"
              minWidth={20}
              height={11}
            >
              <Media
                enlarge
                radius="m"
                sizes="20"
                alt="FB Glade Lights"
                src="/images/gallery/GladeLights.jpeg"
              />
            </Row>
            <Row
              border="neutral-medium"
              radius="m"
              minWidth={20}
              height={11}
            >
              <Media
                enlarge
                radius="m"
                sizes="20"
                alt="Don Toliver Concert"
                src="/images/gallery/DonGlow.jpg"
              />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
        <Projects range={[3, 3]} />
      <Mailchimp />
    </Column>
  );
}
