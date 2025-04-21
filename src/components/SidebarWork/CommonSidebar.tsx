"use client";

// components/CommonSidebar.tsx
import React from 'react';
import Collapse from 'antd/lib/collapse';
import Radio from 'antd/lib/radio';
import { FolderFilled } from '@ant-design/icons';
import styles from './CommonSidebar.module.scss';

const CommonSidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      {/* Functions Section */}
      <Collapse
        defaultActiveKey={['1']}
        ghost
        expandIconPosition="end"
        className={styles.collapseSection}
      >
        <Collapse.Panel header="Chức năng" key="1">
          <div className={styles.functionList}>
            <div className={styles.functionItem}>
              <FolderFilled className={styles.folderIconYellow} />
              <span>Danh sách công việc</span>
            </div>
            <div className={styles.functionItem}>
              <FolderFilled className={styles.folderIconYellow} />
              <span>Công việc của tôi</span>
            </div>
            <div className={styles.functionItem}>
              <FolderFilled className={styles.folderIconYellow} />
              <span>Nhân viên của tôi</span>
            </div>
            <div className={styles.functionItem}>
              <FolderFilled className={styles.folderIconYellow} />
              <span>Đang theo dõi</span>
            </div>
            <div className={styles.functionItem}>
              <FolderFilled className={styles.folderIconYellow} />
              <span>Công việc lặp lại</span>
            </div>
          </div>
        </Collapse.Panel>
      </Collapse>

      {/* Display Type Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Kiểu hiển thị</h3>
        <Radio.Group defaultValue="Bảng" className={styles.radioGroup}>
          <Radio value="Danh sách">Danh sách</Radio>
          <Radio value="Bảng">Bảng</Radio>
          <Radio value="Lịch biểu">Lịch biểu</Radio>
        </Radio.Group>
      </div>

      {/* Filter by Status Section */}
      <Collapse
        defaultActiveKey={['1']}
        ghost
        expandIconPosition="end"
        className={styles.collapseSection}
      >
        <Collapse.Panel header="Lọc theo trạng thái" key="1">
          <Radio.Group defaultValue="Tất cả" className={styles.radioGroup}>
            <Radio value="Tất cả">Tất cả</Radio>
            <Radio value="Đang thực hiện">Đang thực hiện</Radio>
            <Radio value="Chờ kiểm tra">Chờ kiểm tra</Radio>
            <Radio value="Đã hoàn thành">Đã hoàn thành</Radio>
            <Radio value="Quá hạn">Quá hạn</Radio>
          </Radio.Group>
        </Collapse.Panel>
      </Collapse>

      {/* Filter by Department Section */}
      <Collapse
        defaultActiveKey={['1']}
        ghost
        expandIconPosition="end"
        className={styles.collapseSection}
      >
        <Collapse.Panel header="Lọc theo phòng ban" key="1">
          <Radio.Group defaultValue="Tất cả" className={styles.radioGroup}>
            <Radio value="Tất cả">Tất cả</Radio>
            <Radio value="Buồng phòng">Buồng phòng</Radio>
            <Radio value="Bàn phòng">Bàn phòng</Radio>
            <Radio value="Lễ tân">Lễ tân</Radio>
            <Radio value="Kỹ thuật">Kỹ thuật</Radio>
          </Radio.Group>
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};

export default CommonSidebar;