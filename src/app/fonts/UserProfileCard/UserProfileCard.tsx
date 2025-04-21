// components/UserProfileCard.tsx
import React from "react";
import { Card, Progress, Avatar } from "antd";
import { UserOutlined, FileOutlined } from "@ant-design/icons";
import styles from "./UserProfileCard.module.scss";

const UserProfileCard: React.FC = () => {
  const tasksCompleted = 77;
  const totalTasks = 93;
  const completionPercentage = (tasksCompleted / totalTasks) * 100;

  return (
    <Card className={styles["user-profile-card"]}>
      <div className={styles["user-profile-card__info"]}>
        <h3>Thông tin của bạn</h3>
      </div>
      <div className={styles["user-profile-card__avatar-section"]}>
        <Avatar
          className={styles["user-profile-card__avatar"]}
          icon={<UserOutlined />}
        />
        <h2 className={styles["user-profile-card__username"]}>
          Nguyễn Văn Dũng
        </h2>
        <p className={styles["user-profile-card__position"]}>
          Quản lý buồng phòng
        </p>
      </div>
      <div className={styles["user-profile-card__details"]}>
        <div className={styles["user-profile-card__ratings"]}>
          <div className={styles["user-profile-card__rating-item"]}>
            <span className={styles["user-profile-card__rating-label"]}>
              Được giao:
            </span>
            <span className={styles["user-profile-card__rating-value"]}>6</span>
          </div>
          <div className={styles["user-profile-card__rating-item"]}>
            <span className={styles["user-profile-card__rating-label"]}>
              Giao đi:
            </span>
            <span className={styles["user-profile-card__rating-value"]}>6</span>
          </div>
        </div>
        <div className={styles["user-profile-card__progress-section"]}>
          <div className={styles["user-profile-card__progress-header"]}>
            <FileOutlined />
            <span>Công việc xử lý</span>
            <span className={styles["user-profile-card__progress-percentage"]}>
              {completionPercentage.toFixed(0)}%
            </span>
          </div>
          <Progress
            percent={completionPercentage}
            showInfo={false}
            style={{ strokeWidth: 12 }}
            className={styles["user-profile-card__progress"]}
          />

          <div className={styles["user-profile-card__progress-details"]}>
            <span className={styles["user-profile-card__progress-total"]}>
              77/93 Hoàn thành
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UserProfileCard;
