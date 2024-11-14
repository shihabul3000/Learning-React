import { LineChart as Lchart, Line } from 'recharts';

const LineChart = () => {

    const studentData = [
        { id: 1, name: "Alice", mathMarks: 78 },
        { id: 2, name: "Bob", mathMarks: 85 },
        { id: 3, name: "Charlie", mathMarks: 92 },
        { id: 4, name: "David", mathMarks: 74 },
        { id: 5, name: "Eve", mathMarks: 88 },
        { id: 6, name: "Frank", mathMarks: 67 },
        { id: 7, name: "Grace", mathMarks: 91 },
        { id: 8, name: "Hannah", mathMarks: 83 },
        { id: 9, name: "Ivan", mathMarks: 76 },
        { id: 10, name: "Judy", mathMarks: 89 }
      ];


    return (
        <div>
            
<Lchart width = {500} height={400} data={studentData}> 

<Line dataKey={'mathMarks'} stroke ='yellow' ></Line>

</Lchart>




        </div>
    );
};

export default LineChart;