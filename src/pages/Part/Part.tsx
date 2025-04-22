'use client'

import React, { useState, useRef, useEffect } from 'react';
import styles from './Part.module.scss';
import AddButton from '../CommonButton/AddButton'; // Import AddButton
import Filter from '../CommonButton/Filter';
import Pagination from '../CommonButton/Pagination';
import ActionMenu from '../ActionButton/ActionMenu';
import AddPart from './AddPart'; // Import modal thêm bộ phận
import EditPart from './EditPart'; // Import modal chỉnh sửa bộ phận

const PartData = [
  {
    id: 1,
    title: 'Buồng phòng',
    icon: '🏨',
    subTitle: 'PHÒNG BAN THUỘC BỘ PHẬN',
    Parts: [
      { id: 1, name: 'Buồng phòng chi nhánh A', icon: '🏢' },
      { id: 2, name: 'Buồng phòng chi nhánh B', icon: '🏢' },
    ],
    moreText: '+ 2 phòng ban',
    createdBy: 'Đào Xuân Hoà',
    createdAt: '17/07/2025',
  },
  // Thêm các bộ phận khác nếu cần
];

const Part = () => {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [isAddPartOpen, setIsAddPartOpen] = useState(false); // Trạng thái điều khiển modal thêm bộ phận
  const [isEditPartOpen, setIsEditPartOpen] = useState(false); // Trạng thái điều khiển modal chỉnh sửa bộ phận
  const [PartToEdit, setPartToEdit] = useState<any>(null); // Lưu trữ bộ phận cần chỉnh sửa
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (id: number) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const handleEdit = (Part: any) => {
    setPartToEdit(Part); // Lưu bộ phận cần chỉnh sửa
    setIsEditPartOpen(true); // Mở modal chỉnh sửa
  };

  const handleDelete = (id: number) => {
    console.log('Xoá bộ phận ID:', id);
  };

  const openAddPartModal = () => {
    setIsAddPartOpen(true); // Mở modal thêm bộ phận
  };

  const closeAddPartModal = () => {
    setIsAddPartOpen(false); // Đóng modal
  };

  const closeEditPartModal = () => {
    setIsEditPartOpen(false); // Đóng modal chỉnh sửa
    setPartToEdit(null); // Xóa thông tin bộ phận đang chỉnh sửa
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.Part}>
      <div className={styles['Part__header']}>
        <div className={styles['Part__title-group']}>
          <h2 className={styles['Part__title']}>Danh sách các bộ phận</h2>
          <p className={styles['Part__desc']}>Xem chi tiết thông tin của bộ phận...</p>
        </div>
        <div className={styles['Part__actions']}>
          <Filter />
          {/* Sửa label thành 'Thêm bộ phận' và gọi hàm mở modal */}
          <AddButton label="Thêm bộ phận" onClick={openAddPartModal} />
        </div>
      </div>

          {isAddPartOpen && (
      <AddPart
        onClose={closeAddPartModal}
        onSubmit={(data) => {
          console.log('Dữ liệu thêm:', data);
          closeAddPartModal();
        }}
      />
    )}
      {isEditPartOpen && PartToEdit && (
        <EditPart
          Part={PartToEdit}
          onClose={closeEditPartModal}
          onSubmit={(data) => {
            console.log('Dữ liệu chỉnh sửa:', data); // Xử lý lưu thay đổi ở đây
            closeEditPartModal(); // Đóng modal sau khi lưu thay đổi
          }}
        />
      )}

      <div className={styles['Part-container']}>
        {PartData.map((Part) => (
          <div key={Part.id} className={styles['Part-card']}>
            <div
              className={styles['Part-card__dots']}
              onClick={() => toggleMenu(Part.id)}
            >
              ⋯
            </div>

            {openMenuId === Part.id && (
              <div ref={menuRef} className={styles['Part-card__menu']}>
                <ActionMenu
                  onEdit={() => handleEdit(Part)} // Gọi hàm chỉnh sửa khi nhấn
                  onDelete={() => handleDelete(Part.id)}
                  editLabel="Chỉnh sửa"     // Tùy chỉnh label của nút "Chỉnh sửa"
                />
              </div>
            )}

            <div className={styles['Part-card__header']}>
              <div className={styles['Part-card__header-icon']}>{Part.icon}</div>
              <div>{Part.title}</div>
            </div>

            <div className={styles['Part-card__subheader']}>{Part.subTitle}</div>

            <div className={styles['Part-card__Parts']}>
              {Part.Parts.map((dept) => (
                <div key={dept.id} className={styles['Part-card__Part']}>
                  <i>{dept.icon}</i>
                  <b>{dept.name}</b>
                </div>
              ))}
            </div>

            <div className={styles['Part-card__more']}>{Part.moreText}</div>
            <div className={styles['Part-card__footer']}>
              Tạo bởi 👤 {Part.createdBy} lúc {Part.createdAt}
            </div>
          </div>
        ))}
      </div>

      <div className={styles['Part__pagination']}>
        <Pagination />
      </div>
    </div>
  );
};

export default Part;
