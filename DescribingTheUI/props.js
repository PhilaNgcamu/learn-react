function Avatar({ person, size = 100 }) {
  return (
    <img
      classname="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function getImageUrl(person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

export default function Profile() {
  return (
    <>
      <Avatar
        person={{ name: "Philasande Ngcamu", imageId: "1bX5QH6" }}
        size={100}
      />
      <Avatar
        person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
        size={100}
      />
      <Avatar
        person={{ name: "Aklilu Lemma", imageId: "OKS67lh" }}
        size={100}
      />
    </>
  );
}
