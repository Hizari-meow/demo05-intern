'use client';

import React, { useState } from 'react';
import styles from './AddPart.module.scss';

type Props = {
  onClose: () => void;
  onSubmit: (data: { name: string; manager: string; description: string }) => void;
};

const AddPart: React.FC<Props> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [manager, setManager] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, manager, description });
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <h2 className={styles.modal__title}>Thêm bộ phận</h2>
          <button className={styles.modal__close} onClick={onClose}>✕</button>
        </div>

        <div className={styles.modal__body}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.form__group}>
              <label htmlFor="Part-name" className={styles.form__label}>
                Tên bộ phận <span className={styles.form__required}>*</span>
              </label>
              <input
                id="Part-name"
                className={styles.form__input}
                placeholder="Ví dụ: bộ phận 1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className={styles.form__group}>
              <label htmlFor="manager" className={styles.form__label}>
                Chọn quản lý bộ phận <span className={styles.form__required}>*</span>
              </label>
              <select
                id="manager"
                className={styles.form__input}
                value={manager}
                onChange={(e) => setManager(e.target.value)}
                required
              >
                <option value="" disabled>
                  Chọn người quản lý bộ phận
                </option>
                <option value="dao-xuan-hoa">Đào Xuân Hoà</option>
                <option value="le-thi-hoa">Lê Thị Hòa</option>
                <option value="nguyen-van-b">Nguyễn Văn B</option>
              </select>
            </div>

            <div className={styles.form__group}>
              <label htmlFor="description" className={styles.form__label}>Mô tả</label>
              <textarea
                id="description"
                className={styles.form__input}
                placeholder="Nhập thông tin mô tả"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </form>
        </div>

        <div className={styles.modal__footer}>
          <button className={styles['button-close']} onClick={onClose}>Đóng</button>
          <button type="submit" className={styles['button-add-Part']} onClick={handleSubmit}>
            Thêm bộ phận
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPart;
