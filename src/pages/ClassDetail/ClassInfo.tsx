import { ClassForm } from "@components/Forms";
import ItemActions from "@components/ItemActions";
import { InfoJumbotron } from "@components/Jumbotron";
import { useAppDispatch, useAppSelector } from "@hooks";
import { removeClass } from "@slices/classSlice";
import { ClassProps } from "@types";
import React from "react";

type ClassInfoProps = {
  data?: ClassProps;
};

export default function ClassInfo({ data }: ClassInfoProps) {
  // redux hook
  const dispatch = useAppDispatch();
  const schoolYear = useAppSelector((state) => state.schoolYear);
  const grade = useAppSelector((state) => state.grade);
  const classType = useAppSelector((state) => state.classType);
  // get derived data
  const schoolYearObj = schoolYear.value.find(
    (el) => el.id === data?.schoolYearId
  );
  const gradeObj = grade.value.find((el) => el.id === data?.gradeId);
  const classTypeObj = classType.value.find(
    (el) => el.id === data?.classTypeId
  );
  const pillars = [
    [
      {
        label: "Niên khóa",
        value: `${schoolYearObj?.beginYear}-${schoolYearObj?.endYear}`,
      },
      {
        label: "Khoa khối",
        value: `Khối ${gradeObj?.name}`,
      },
      { label: "Mã lớp học", value: data?.id },
      { label: "Tên lớp học", value: data?.name },
    ],
    [
      { label: "GV chủ nhiệm", value: "Trần Minh Quốc" },
      {
        label: "Số lượng học viên",
        value: `${data?.studentCapacity} học viên`,
      },
      { label: "Loại lớp học", value: `Lớp học ${classTypeObj?.name}` },
      {
        label: "Số lượng môn học",
        value: `${data?.subjectsId.length} môn học`,
      },
    ],
    [
      {
        label: "Mô tả",
        value: data?.description,
      },
    ],
  ];

  return (
    <div className="class-info">
      <InfoJumbotron
        title="Thông tin chung"
        data={pillars}
        panel={
          <ItemActions>
            <ItemActions.EditButton
              title=""
              innerForm={(props) => <ClassForm {...props} defaultData={data} />}
            />
            <ItemActions.DeleteButton
              deleteName="lớp học"
              onDelete={() => dispatch(removeClass(data?.id as string))}
            />
          </ItemActions>
        }
        keyAffix="general-info"
      />
    </div>
  );
}
