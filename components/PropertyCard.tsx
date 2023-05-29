import {
  Card,
  Image,
  Heading,
  Icon,
  View,
  Text,
  Rating,
  Flex
} from "@aws-amplify/ui-react";
import Link from "next/link";

import { Storage } from "aws-amplify";
import { BiBed } from "react-icons/bi";

import { PropertyProps } from "../types/types";
import { useEffect, useState } from "react";

export default function PropertyCard({
  id,
  name,
  thumbnail,
  thumbnailAlt,
  beds,
  rate,
  rating
}: PropertyProps) {
  const [S3Photo, setS3Photo] = useState("");
  useEffect(() => {
    const getS3Photo = async () => {
      const house = await Storage.get(thumbnail);
      setS3Photo(house);
    };
    getS3Photo();
  }, [S3Photo, thumbnail]);
  return (
    <Link href={`/edit/${id}`}>
      <Card lineHeight="small">
        <Flex gap="xxs" direction="column">
          <Image
            width="100%"
            height="300px"
            objectFit="cover"
            alt={thumbnailAlt}
            src={S3Photo}
            borderRadius="medium"
          ></Image>
          <Flex alignItems="center">
            <Heading level={2} isTruncated={true}>
              {name}
            </Heading>
            <Rating
              value={rating}
              size="small"
              gap="xxxs"
              marginLeft="auto"
            ></Rating>
          </Flex>
          <Flex gap="xxxs" alignItems="center" color="neutral.80">
            <Icon as={BiBed}></Icon> {beds} bed
          </Flex>
          <View>
            <Text as="span" fontWeight="bold">
              ${rate}
            </Text>
            <Text as="span" color="neutral.80">
              {" "}
              / night
            </Text>
          </View>
        </Flex>
      </Card>
    </Link>
  );
}
