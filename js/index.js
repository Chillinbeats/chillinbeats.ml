window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQDKs8CBpYJ77ehkfqyHzFq_rybGprLaE25XMVaNPEXhUT_yC1WoRGb2nCM4V2FyXqYUFEazhi1lf3Jx87LnwkvVif3BMXCS_Hj9SJ1HDSdD3XbHDPkN3PMeoRH6YVLvmdSAM9UeIigy8Hu831Ae9lxd71yf0dbs4N69qDqWWwtv8ckgW6yjeg0';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); }
    });
  
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
  
    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });
  
    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });
  
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });
  
    // Connect to the player!
    player.connect();
  };