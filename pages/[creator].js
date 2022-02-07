import supabase from "../utils/supabaseClient";

const Creator = ({ creator }) => {
  return (
    <>
      <div className="creator">
        <div className="creator-title">
          <h2>{creator.name}</h2>
        </div>
        <div className="creator-image">
          <img src={creator.image} alt={creator.name} />
        </div>
      </div>
    </>
  );
};

export default Creator;

export async function getServerSideProps({ params }) {
  const { paramsiId } = params;

  const { data: creator, error } = await supabase
    .from("creators")
    .select("*")
    .eq("id", paramsiId)
    .single();
  if (error) {
    throw new Error(error);
  }

  return {
    props: {
      creator,
    },
  };
}
