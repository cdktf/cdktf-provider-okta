// https://www.terraform.io/docs/providers/okta/r/link_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LinkDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the associated relationship.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/link_definition#associated_description LinkDefinition#associated_description}
  */
  readonly associatedDescription: string;
  /**
  * API name of the associated link.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/link_definition#associated_name LinkDefinition#associated_name}
  */
  readonly associatedName: string;
  /**
  * Display name of the associated link.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/link_definition#associated_title LinkDefinition#associated_title}
  */
  readonly associatedTitle: string;
  /**
  * Description of the primary relationship.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/link_definition#primary_description LinkDefinition#primary_description}
  */
  readonly primaryDescription: string;
  /**
  * API name of the primary link.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/link_definition#primary_name LinkDefinition#primary_name}
  */
  readonly primaryName: string;
  /**
  * Display name of the primary link.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/link_definition#primary_title LinkDefinition#primary_title}
  */
  readonly primaryTitle: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/link_definition okta_link_definition}
*/
export class LinkDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_link_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/link_definition okta_link_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LinkDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: LinkDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_link_definition',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._associatedDescription = config.associatedDescription;
    this._associatedName = config.associatedName;
    this._associatedTitle = config.associatedTitle;
    this._primaryDescription = config.primaryDescription;
    this._primaryName = config.primaryName;
    this._primaryTitle = config.primaryTitle;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_description - computed: false, optional: false, required: true
  private _associatedDescription?: string; 
  public get associatedDescription() {
    return this.getStringAttribute('associated_description');
  }
  public set associatedDescription(value: string) {
    this._associatedDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedDescriptionInput() {
    return this._associatedDescription;
  }

  // associated_name - computed: false, optional: false, required: true
  private _associatedName?: string; 
  public get associatedName() {
    return this.getStringAttribute('associated_name');
  }
  public set associatedName(value: string) {
    this._associatedName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedNameInput() {
    return this._associatedName;
  }

  // associated_title - computed: false, optional: false, required: true
  private _associatedTitle?: string; 
  public get associatedTitle() {
    return this.getStringAttribute('associated_title');
  }
  public set associatedTitle(value: string) {
    this._associatedTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedTitleInput() {
    return this._associatedTitle;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // primary_description - computed: false, optional: false, required: true
  private _primaryDescription?: string; 
  public get primaryDescription() {
    return this.getStringAttribute('primary_description');
  }
  public set primaryDescription(value: string) {
    this._primaryDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDescriptionInput() {
    return this._primaryDescription;
  }

  // primary_name - computed: false, optional: false, required: true
  private _primaryName?: string; 
  public get primaryName() {
    return this.getStringAttribute('primary_name');
  }
  public set primaryName(value: string) {
    this._primaryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNameInput() {
    return this._primaryName;
  }

  // primary_title - computed: false, optional: false, required: true
  private _primaryTitle?: string; 
  public get primaryTitle() {
    return this.getStringAttribute('primary_title');
  }
  public set primaryTitle(value: string) {
    this._primaryTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTitleInput() {
    return this._primaryTitle;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_description: cdktf.stringToTerraform(this._associatedDescription),
      associated_name: cdktf.stringToTerraform(this._associatedName),
      associated_title: cdktf.stringToTerraform(this._associatedTitle),
      primary_description: cdktf.stringToTerraform(this._primaryDescription),
      primary_name: cdktf.stringToTerraform(this._primaryName),
      primary_title: cdktf.stringToTerraform(this._primaryTitle),
    };
  }
}
