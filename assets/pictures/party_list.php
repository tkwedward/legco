<?
$json = file_get_contents('motion_reports.js');
$objJson = json_decode($json, true);
$myname = $_GET['name'];
$belong_to = $_GET['belong_to'];
$title_from_js = $_GET['title_from_js'];
$motion_tag_from_js = $_GET['motion_tags'];
$title_Array_number_from_js = $_GET['title_Array_number_from_js'];
$member_from_js = $_GET['member'];

switch ($myname) {
  case "date"://用來show第幾屆
          foreach($objJson as $index=>$motionArray){//$index: 0, 1, 2,... $motionArray︰取消小三、「正視殘疾人士的需要」、廖長江議員修正的議案
            echo $motionArray[date];
            echo "</br>";
          }
  break;//case "date":

  case "party"://用來show出這一屆有甚麼政黨︰民主黨、民建聯⋯⋯
        foreach($objJson[0][parties] as $party=>$voteArray){//用來show出這一屆有甚麼政黨︰民主黨、民建聯⋯⋯，$voteArray︰贊成、反對⋯⋯
        $partyList = "<div class='individual_party' alt=''";
        $partyList .= $party;
        $partyList .= "''>";
        $partyList .= $party;
        $partyList .= "</div>";
        echo $partyList;
      }//end of show政黨
  break;//case "party":/

    case "member_list"://用來show出這一屆政黨有甚麼member
        foreach($objJson[0][parties] as $party=>$voteArray){//用來show出這一屆有甚麼政黨︰民主黨、民建聯⋯⋯
            foreach($voteArray as $vote=>$nameArray){//$voteArray︰贊成、反對⋯⋯，$vote︰贊成、反對⋯⋯﹐$nameArray︰何俊仁、鍾樹根⋯⋯
              if($belong_to==$party){
                foreach($nameArray as $index=>$name){
                  $memberList = "<div class= 'member_unit_box' alt='";
                  $memberList .= $name."'><div class= 'member_picture' alt='";
                  $memberList .= $name."'><img src = 'pictures/member/5th/";
                  $memberList .= $name.".jpg";
                  $memberList .= "'></div><div class='individual_name' alt='";
                  $memberList .= $name."'>";
                  $memberList .= $name."</div></div>";
                  echo $memberList;
                  }
                }//end of foreach $index=>$name
          }//end of foreach $vote=>$nameArray
      }//end of show政黨member
  break;//case "member_list":

  case 'memeber_vote_list_title':
      $motion_title_to_js_Array = array();
      $motion_vote_record_to_js_Array= array();

      foreach($objJson as $motionArray=>$index){//整issuses
          $motion_title = "";
          $motion_title .= $index[motion_name];
          $motion_title_to_js_Array[] = $motion_title;
      }// end of foreach($objJson as $motionArray)

      foreach($objJson as $motionArray=>$index){//整vote record
        $motion_vote="";
        foreach($index[parties] as $parites => $voteArray){
          foreach($voteArray as $voteArray_key => $nameArray){
              foreach ($nameArray as $nameArray_key => $name) {
                if($name == $member_from_js){
                  switch ($voteArray_key) {
                      case '贊成':
                     $motion_vote_record_to_js_Array[] = "<div class='detail detail_yes'>".$voteArray_key."</div><div class='detail detail_no'></div><div class='detail detail_abstain'></div><div class='detail detail_absent'></div><div class='detail_present'> </div>";
                    //  $motion_vote_record_to_js_Array[] = "<td class='detail_yes'>".$voteArray_key."</td><td class='detail_no'> </td><td class='detail_abstain'> </td><td class='detail_absent'> </td><td class='detail_present'> </td>";
                        break;

                      case '反對':
                        $motion_vote_record_to_js_Array[] = "<div class='detail detail_yes'></div><div class='detail detail_no'>".$voteArray_key."</div><div class='detail detail_abstain'> </div><div class='detail detail_absent'> </div><div class='detail_present'> </div>";
                        // $motion_vote_record_to_js_Array[] = "<td class='detail_yes'></td><td class='detail_no'>".$voteArray_key." </td><td class='detail_abstain'> </td><td class='detail_absent'> </td><td class='detail_present'> </td>";
                        break;

                      case '棄權':
                         $motion_vote_record_to_js_Array[] .= "<div class='detail detail_yes'></div><div class='detail detail_no'></div><div class='detail detail_abstain'>".$voteArray_key."</div><div class='detail detail_absent'> </div><div class='detail_present'> </div>";
                        //  $motion_vote_record_to_js_Array[] = "<td class='detail_yes'></td><td class='detail_no'> </td><td class='detail_abstain'>".$voteArray_key." </td><td class='detail_absent'> </td><td class='detail_present'> </td>";
                        break;

                      case '缺席':
                        $motion_vote_record_to_js_Array[] = "<div class='detail detail_yes'></div><div class='detail detail_no'></div><div class='detail detail_abstain'></div><div class='detail detail_absent'>".$voteArray_key."</div><div class='detail_present'> </div>";
                        // $motion_vote_record_to_js_Array[] = "<td class='detail_yes'></td><td class='detail_no'> </td><td class='detail_abstain'> </td><td class='detail_absent'> ".$voteArray_key."</td><td class='detail_present'></td>";

                        break;

                      case '出席':
                        //  $motion_vote_record_to_js_Array[] = "<td class='detail_yes'></td><td class='detail_no'> </td><td class='detail_abstain'> </td><td class='detail_absent'> </td><td class='detail_present'>".$voteArray_key." </td>";
                         $motion_vote_record_to_js_Array[] = "<div class='detail detail_yes'></div><div class='detail detail_no'></div><div class='detail detail_abstain'></div><div class='detail detail_absent'></div><div class='detail_present'>".$voteArray_key."</div></tr>";
                        break;
                      }//end of switch
                }//if($name=="梁美芬")
              }//foreach ($nameArray as $nameArray_key => $name)
          }//foreach($voteArray as $voteArray_key => $nameArray)
        }//foreach($index[parties] as $parites => $voteArray)
      }//foreach($objJson as $motionArray=>$index)
      //
      // print_r($motion_title_to_js_Array);
      // echo "<p>";
      //   print_r($motion_vote_record_to_js_Array);
      //   echo "<p>";
        echo "<div class='detail_list_title'>";
        for($i=0; $i<sizeOf($motion_title_to_js_Array);$i++){
          echo "<div class='detail_list_box'>";
          echo $motion_title_to_js_Array[$i];
          echo "</div>";

        }//end of for($i=0; $i<sizeOf($motion_title_to_js_Array);$i++)
        echo "</div>";
        echo "<div class = 'shut_up'>";
        for($i=0; $i<sizeOf($motion_title_to_js_Array);$i++){
          echo $motion_vote_record_to_js_Array[$i];
        }//end of for($i=0; $i<sizeOf($motion_title_to_js_Array);$i++)
        echo "</div>";


      break;//case 'memeber_vote_list_title':

    //
    // case "motion_list":
    // foreach($objJson as $obj=>$motionArray){
    //     $motion_list = "<div class='jazz ".$motionArray[motion_name]." '>".$motionArray[motion_name]."</div>";
    //     echo $motion_list;
    //     // echo "fasdfs";
    // }
    // // <div class='jazz " + student[i][0] +" '>"+student[i][1]+"</div>
    // break;
    case "motion_tag":

    for ($i=0; $i < sizeOf($objJson) ; $i++) {
      for ($r=0; $r < sizeOf($objJson[$i]) ; $r++) {
        if ($objJson[$i][tags][$r]== "$motion_tag_from_js"){
            // echo "<div class ='jazz'>".$objJson[$i][motion_name]."</div>";
            echo "<div class ='jazz'>".$objJson[$i][motion_name]."</div>";
        } //end of if function
      }//end of for $r
    }//end of for $i

    break;

    case "motion_title":
    $title_Array;
    foreach($objJson as $obj=>$motionArray){
        $title_Array[] = $motionArray[motion_name];
    }
    echo array_search($title_from_js,$title_Array);

    break;


/////////////////////////////////////
    case "vote_yes":
    $yes;
    $yes_return;
    $yes_accumulate;

    foreach($objJson[$title_Array_number_from_js][parties] as $party=>$voteArray){//用來show出這一屆有甚麼政黨︰民主黨、民建聯⋯⋯，$voteArray︰贊成:[xxx]、反對:[xxx]⋯⋯
      $yes = sizeOf($voteArray[贊成]);
      $no = sizeOf($voteArray[反對]);
      $abstain = sizeOf($voteArray[棄權]);
      $absent = sizeOf($voteArray[缺席]);
      $total = $yes+$no+$abstain+$absent;
      $yes_accumulate += $yes;

      if($yes !=0){
      $yes_return .= "<div class='black' title='";
      $yes_return .= $yes;
      $yes_return .= "'><div  class='black_image'><img src='pictures/parties12/";
      $yes_return .= $party;
      $yes_return .= ".jpg'/></div> <div class='fraction'>";
      $yes_return .= $yes."/".$total."</div></div>";

      }
  }//end of for each

  if($yes_accumulate !=0){
    echo "<div class='white'>贊成</div>";
    echo "<div class='one'>";
    echo $yes_return;
    echo "</div>";
  }
        break;

    case 'vote_no':
    $no;
    $no_return;
    $no_accumulate;

    foreach($objJson[0][parties] as $party=>$voteArray){//用來show出這一屆有甚麼政黨︰民主黨、民建聯⋯⋯，$voteArray︰贊成:[xxx]、反對:[xxx]⋯⋯

      $yes = sizeOf($voteArray[贊成]);
      $no = sizeOf($voteArray[反對]);
      $abstain = sizeOf($voteArray[棄權]);
      $absent = sizeOf($voteArray[缺席]);
      $total = $yes+$no+$abstain+$absent;
      $no_accumulate += $no;

      if($no !=0){
      $no_return="";
      $no_return .= "<div class='black' title='";
      $no_return .= $no;
      $no_return .= "'><div class='black_image'><img src='pictures/parties12/";
      $no_return .= $party;
      $no_return .= ".jpg'/></div> <div class='fraction'>";
      $no_return .= $no."/".$total."</div></div>";
      }
    }//end of for each

    if($abstain_accumulate !=0){
      echo "<div class='white'>反對</div>";
      echo "<div class='two'>";
      echo $no_return;
      echo "</div>";
    }
      break;

    case 'vote_abstain':
    $abstain;
    $abstain_return;
    $abstain_accumulate;

    foreach($objJson[0][parties] as $party=>$voteArray){//用來show出這一屆有甚麼政黨︰民主黨、民建聯⋯⋯，$voteArray︰贊成:[xxx]、反對:[xxx]⋯⋯
      $yes = sizeOf($voteArray[贊成]);
      $no = sizeOf($voteArray[反對]);
      $abstain = sizeOf($voteArray[棄權]);
      $absent = sizeOf($voteArray[缺席]);
      $total = $yes+$no+$abstain+$absent;
      $abstain_accumulate += $abstain;

      if($abstain !=0){
      $abstain_return .= "<div class='black' title='";
      $abstain_return .= $abstain;
      $abstain_return .= "'><div class='black_image'><img src='pictures/parties12/";
      $abstain_return .= $party;
      $abstain_return .= ".jpg'/></div> <div class='fraction'>";

      $abstain_return .= $abstain."/".$total."</div></div>";
      }
    }//end of for each

    if($abstain_accumulate !=0){
      echo "<div class='white'>棄權</div>";
      echo "<div class='three'>";
      echo $abstain_return;
      echo "</div>";
    }
      break;

    case 'vote_absent':
    $absent;
    $absent_return;
    $absent_accumulate;

    foreach($objJson[0][parties] as $party=>$voteArray){//用來show出這一屆有甚麼政黨︰民主黨、民建聯⋯⋯，$voteArray︰贊成:[xxx]、反對:[xxx]⋯⋯
      $yes = sizeOf($voteArray[贊成]);
      $no = sizeOf($voteArray[反對]);
      $abstain = sizeOf($voteArray[棄權]);
      $absent = sizeOf($voteArray[缺席]);
      $total = $yes+$no+$abstain+$absent;
      $absent_accumulate += $absent;

      if($absent !=0){
      $absent_return .= "<div class='black' title='";
      $absent_return .= $absent;
      $absent_return .= "'><div  class='black_image'><img src='pictures/parties12/";
      $absent_return .= $party;
      $absent_return .= ".jpg'/></div> <div class='fraction'>";
      $absent_return .= $absent."/".$total."</div></div>";
      }
    }//end of for each

    if($absent_accumulate !=0){
      echo "<div class='white'>缺席</div>";
      echo "<div class='four'>";
      echo $absent_return;
      echo "</div>";
    }
    break;
}


?>
