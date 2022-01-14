// https://www.terraform.io/docs/providers/okta/d/user_security_questions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaUserSecurityQuestionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of a Okta User
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/user_security_questions#user_id DataOktaUserSecurityQuestions#user_id}
  */
  readonly userId: string;
}
export class DataOktaUserSecurityQuestionsQuestions extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/user_security_questions okta_user_security_questions}
*/
export class DataOktaUserSecurityQuestions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_user_security_questions";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/user_security_questions okta_user_security_questions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaUserSecurityQuestionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaUserSecurityQuestionsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_user_security_questions',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // questions - computed: true, optional: false, required: false
  public questions(index: string) {
    return new DataOktaUserSecurityQuestionsQuestions(this, 'questions', index);
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }
}
