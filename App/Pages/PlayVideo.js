import { WebView } from 'react-native-webview';

export default function PlayVideo() {
  return (
    <WebView source={{ uri: 'https://www.youtube.com/embed/fWjsdhR3z3c' }} />
  );
}
