import React from 'react';

// 프로필에서 사용 할 데이터
const profileData = {
    developer: {
      name: '임준영',
      description:
        '욜로를 추구하고 재밌는 것만 골라서 하는 개발자'
    },
    gildong: {
      name: '이재근',
      description: '전래동화의 주인공'
    }
  };

const Profile = ({ match }) => {
    
    const { username } = match.params;
    const profile = profileData[username];
    
    if (!profile) {
        return <div>존재하지 않은 유저입니다.</div>
    } 
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;