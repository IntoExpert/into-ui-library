import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VideoPlayer } from '../../components/video';


export default {
    title: 'Video/Player',
    component: VideoPlayer,

} as ComponentMeta<typeof VideoPlayer>;

const Template: ComponentStory<typeof VideoPlayer> = (args) => <VideoPlayer {...args} />;

export const WithPlay = Template.bind({});
WithPlay.args = {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    showPlayButton: true,
    playButtonPosition: 'topLeft'
};