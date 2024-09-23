import { VideoPage } from '../../../components/video-page';

// This is a mock function to get video data. In a real application,
// you would fetch this data from an API or database.
async function getVideoData(id: string) {
  // Mock data - replace with actual data fetching logic
  return {
    videoId: id,
    title: `Video ${id}`,
    description: `This is the description for video ${id}.`,
    credits: `Director: John Doe\nCinematographer: Jane Smith\nEditor: Bob Johnson`,
    frames: [
      `/frames/${id}_1.jpg`,
      `/frames/${id}_2.jpg`,
      `/frames/${id}_3.jpg`,
      `/frames/${id}_4.jpg`,
    ],
    backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16), // Random color
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const videoData = await getVideoData(params.id);

  return <VideoPage {...videoData} />;
}

// Generate static params for all known video IDs
export async function generateStaticParams() {
  const videoIds = [
    '1011859730',
    '1011862045',
    '1011862108',
    '1011862226',
    '1011862137',
    '1011862244',
    '1011862558',
    '1011862707',
    '1011862758',
    '1011862290',
    '1011861601',
    '1011862609',
    '1011863010',
    '1011863070',
    '1011862302',
    '1011862840',
  ];

  return videoIds.map((id) => ({
    id: id,
  }));
}
