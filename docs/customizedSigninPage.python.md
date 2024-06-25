# `customizedSigninPage` Submodule <a name="`customizedSigninPage` Submodule" id="@cdktf/provider-okta.customizedSigninPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomizedSigninPage <a name="CustomizedSigninPage" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page okta_customized_signin_page}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import customized_signin_page

customizedSigninPage.CustomizedSigninPage(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  brand_id: str,
  page_content: str,
  widget_version: str,
  content_security_policy_setting: CustomizedSigninPageContentSecurityPolicySetting = None,
  widget_customizations: CustomizedSigninPageWidgetCustomizations = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.brandId">brand_id</a></code> | <code>str</code> | brand id of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.pageContent">page_content</a></code> | <code>str</code> | page content of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.widgetVersion">widget_version</a></code> | <code>str</code> | widget version specified as a Semver. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.contentSecurityPolicySetting">content_security_policy_setting</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a></code> | content_security_policy_setting block. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.widgetCustomizations">widget_customizations</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a></code> | widget_customizations block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `brand_id`<sup>Required</sup> <a name="brand_id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.brandId"></a>

- *Type:* str

brand id of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#brand_id CustomizedSigninPage#brand_id}

---

##### `page_content`<sup>Required</sup> <a name="page_content" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.pageContent"></a>

- *Type:* str

page content of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#page_content CustomizedSigninPage#page_content}

---

##### `widget_version`<sup>Required</sup> <a name="widget_version" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.widgetVersion"></a>

- *Type:* str

widget version specified as a Semver.

The following are currently supported
*, ^1, ^2, ^3, ^4, ^5, ^6, ^7, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.1, 2.2, 2.3, 2.4,
2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11, 2.12, 2.13, 2.14, 2.15, 2.16, 2.17, 2.18, 2.19, 2.20, 2.21,
3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 5.0, 5.1, 5.2, 5.3,
5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.10, 5.11, 5.12, 5.13, 5.14, 5.15, 5.16, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5,
6.6, 6.7, 6.8, 6.9, 7.0, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 7.10, 7.11, 7.12, 7.13.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#widget_version CustomizedSigninPage#widget_version}

---

##### `content_security_policy_setting`<sup>Optional</sup> <a name="content_security_policy_setting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.contentSecurityPolicySetting"></a>

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a>

content_security_policy_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#content_security_policy_setting CustomizedSigninPage#content_security_policy_setting}

---

##### `widget_customizations`<sup>Optional</sup> <a name="widget_customizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.widgetCustomizations"></a>

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a>

widget_customizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#widget_customizations CustomizedSigninPage#widget_customizations}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putContentSecurityPolicySetting">put_content_security_policy_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations">put_widget_customizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetContentSecurityPolicySetting">reset_content_security_policy_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetWidgetCustomizations">reset_widget_customizations</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_content_security_policy_setting` <a name="put_content_security_policy_setting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putContentSecurityPolicySetting"></a>

```python
def put_content_security_policy_setting(
  mode: str = None,
  report_uri: str = None,
  src_list: typing.List[str] = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putContentSecurityPolicySetting.parameter.mode"></a>

- *Type:* str

enforced or report_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#mode CustomizedSigninPage#mode}

---

###### `report_uri`<sup>Optional</sup> <a name="report_uri" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putContentSecurityPolicySetting.parameter.reportUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#report_uri CustomizedSigninPage#report_uri}.

---

###### `src_list`<sup>Optional</sup> <a name="src_list" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putContentSecurityPolicySetting.parameter.srcList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#src_list CustomizedSigninPage#src_list}.

---

##### `put_widget_customizations` <a name="put_widget_customizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations"></a>

```python
def put_widget_customizations(
  widget_generation: str,
  authenticator_page_custom_link_label: str = None,
  authenticator_page_custom_link_url: str = None,
  classic_recovery_flow_email_or_username_label: str = None,
  custom_link1_label: str = None,
  custom_link1_url: str = None,
  custom_link2_label: str = None,
  custom_link2_url: str = None,
  forgot_password_label: str = None,
  forgot_password_url: str = None,
  help_label: str = None,
  help_url: str = None,
  password_info_tip: str = None,
  password_label: str = None,
  show_password_visibility_toggle: typing.Union[bool, IResolvable] = None,
  show_user_identifier: typing.Union[bool, IResolvable] = None,
  sign_in_label: str = None,
  unlock_account_label: str = None,
  unlock_account_url: str = None,
  username_info_tip: str = None,
  username_label: str = None
) -> None
```

###### `widget_generation`<sup>Required</sup> <a name="widget_generation" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.widgetGeneration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#widget_generation CustomizedSigninPage#widget_generation}.

---

###### `authenticator_page_custom_link_label`<sup>Optional</sup> <a name="authenticator_page_custom_link_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.authenticatorPageCustomLinkLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#authenticator_page_custom_link_label CustomizedSigninPage#authenticator_page_custom_link_label}.

---

###### `authenticator_page_custom_link_url`<sup>Optional</sup> <a name="authenticator_page_custom_link_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.authenticatorPageCustomLinkUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#authenticator_page_custom_link_url CustomizedSigninPage#authenticator_page_custom_link_url}.

---

###### `classic_recovery_flow_email_or_username_label`<sup>Optional</sup> <a name="classic_recovery_flow_email_or_username_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.classicRecoveryFlowEmailOrUsernameLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#classic_recovery_flow_email_or_username_label CustomizedSigninPage#classic_recovery_flow_email_or_username_label}.

---

###### `custom_link1_label`<sup>Optional</sup> <a name="custom_link1_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.customLink1Label"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#custom_link_1_label CustomizedSigninPage#custom_link_1_label}.

---

###### `custom_link1_url`<sup>Optional</sup> <a name="custom_link1_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.customLink1Url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#custom_link_1_url CustomizedSigninPage#custom_link_1_url}.

---

###### `custom_link2_label`<sup>Optional</sup> <a name="custom_link2_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.customLink2Label"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#custom_link_2_label CustomizedSigninPage#custom_link_2_label}.

---

###### `custom_link2_url`<sup>Optional</sup> <a name="custom_link2_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.customLink2Url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#custom_link_2_url CustomizedSigninPage#custom_link_2_url}.

---

###### `forgot_password_label`<sup>Optional</sup> <a name="forgot_password_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.forgotPasswordLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#forgot_password_label CustomizedSigninPage#forgot_password_label}.

---

###### `forgot_password_url`<sup>Optional</sup> <a name="forgot_password_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.forgotPasswordUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#forgot_password_url CustomizedSigninPage#forgot_password_url}.

---

###### `help_label`<sup>Optional</sup> <a name="help_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.helpLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#help_label CustomizedSigninPage#help_label}.

---

###### `help_url`<sup>Optional</sup> <a name="help_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.helpUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#help_url CustomizedSigninPage#help_url}.

---

###### `password_info_tip`<sup>Optional</sup> <a name="password_info_tip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.passwordInfoTip"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#password_info_tip CustomizedSigninPage#password_info_tip}.

---

###### `password_label`<sup>Optional</sup> <a name="password_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.passwordLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#password_label CustomizedSigninPage#password_label}.

---

###### `show_password_visibility_toggle`<sup>Optional</sup> <a name="show_password_visibility_toggle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.showPasswordVisibilityToggle"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#show_password_visibility_toggle CustomizedSigninPage#show_password_visibility_toggle}.

---

###### `show_user_identifier`<sup>Optional</sup> <a name="show_user_identifier" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.showUserIdentifier"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#show_user_identifier CustomizedSigninPage#show_user_identifier}.

---

###### `sign_in_label`<sup>Optional</sup> <a name="sign_in_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.signInLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#sign_in_label CustomizedSigninPage#sign_in_label}.

---

###### `unlock_account_label`<sup>Optional</sup> <a name="unlock_account_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.unlockAccountLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#unlock_account_label CustomizedSigninPage#unlock_account_label}.

---

###### `unlock_account_url`<sup>Optional</sup> <a name="unlock_account_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.unlockAccountUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#unlock_account_url CustomizedSigninPage#unlock_account_url}.

---

###### `username_info_tip`<sup>Optional</sup> <a name="username_info_tip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.usernameInfoTip"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#username_info_tip CustomizedSigninPage#username_info_tip}.

---

###### `username_label`<sup>Optional</sup> <a name="username_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.usernameLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#username_label CustomizedSigninPage#username_label}.

---

##### `reset_content_security_policy_setting` <a name="reset_content_security_policy_setting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetContentSecurityPolicySetting"></a>

```python
def reset_content_security_policy_setting() -> None
```

##### `reset_widget_customizations` <a name="reset_widget_customizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetWidgetCustomizations"></a>

```python
def reset_widget_customizations() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CustomizedSigninPage resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import customized_signin_page

customizedSigninPage.CustomizedSigninPage.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import customized_signin_page

customizedSigninPage.CustomizedSigninPage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import customized_signin_page

customizedSigninPage.CustomizedSigninPage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import customized_signin_page

customizedSigninPage.CustomizedSigninPage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CustomizedSigninPage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CustomizedSigninPage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CustomizedSigninPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CustomizedSigninPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySetting">content_security_policy_setting</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference">CustomizedSigninPageContentSecurityPolicySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetCustomizations">widget_customizations</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference">CustomizedSigninPageWidgetCustomizationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandIdInput">brand_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySettingInput">content_security_policy_setting_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContentInput">page_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetCustomizationsInput">widget_customizations_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersionInput">widget_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandId">brand_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContent">page_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersion">widget_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content_security_policy_setting`<sup>Required</sup> <a name="content_security_policy_setting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySetting"></a>

```python
content_security_policy_setting: CustomizedSigninPageContentSecurityPolicySettingOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference">CustomizedSigninPageContentSecurityPolicySettingOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `widget_customizations`<sup>Required</sup> <a name="widget_customizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetCustomizations"></a>

```python
widget_customizations: CustomizedSigninPageWidgetCustomizationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference">CustomizedSigninPageWidgetCustomizationsOutputReference</a>

---

##### `brand_id_input`<sup>Optional</sup> <a name="brand_id_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandIdInput"></a>

```python
brand_id_input: str
```

- *Type:* str

---

##### `content_security_policy_setting_input`<sup>Optional</sup> <a name="content_security_policy_setting_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySettingInput"></a>

```python
content_security_policy_setting_input: typing.Union[IResolvable, CustomizedSigninPageContentSecurityPolicySetting]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a>]

---

##### `page_content_input`<sup>Optional</sup> <a name="page_content_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContentInput"></a>

```python
page_content_input: str
```

- *Type:* str

---

##### `widget_customizations_input`<sup>Optional</sup> <a name="widget_customizations_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetCustomizationsInput"></a>

```python
widget_customizations_input: typing.Union[IResolvable, CustomizedSigninPageWidgetCustomizations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a>]

---

##### `widget_version_input`<sup>Optional</sup> <a name="widget_version_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersionInput"></a>

```python
widget_version_input: str
```

- *Type:* str

---

##### `brand_id`<sup>Required</sup> <a name="brand_id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandId"></a>

```python
brand_id: str
```

- *Type:* str

---

##### `page_content`<sup>Required</sup> <a name="page_content" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContent"></a>

```python
page_content: str
```

- *Type:* str

---

##### `widget_version`<sup>Required</sup> <a name="widget_version" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersion"></a>

```python
widget_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomizedSigninPageConfig <a name="CustomizedSigninPageConfig" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import customized_signin_page

customizedSigninPage.CustomizedSigninPageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  brand_id: str,
  page_content: str,
  widget_version: str,
  content_security_policy_setting: CustomizedSigninPageContentSecurityPolicySetting = None,
  widget_customizations: CustomizedSigninPageWidgetCustomizations = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.brandId">brand_id</a></code> | <code>str</code> | brand id of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.pageContent">page_content</a></code> | <code>str</code> | page content of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.widgetVersion">widget_version</a></code> | <code>str</code> | widget version specified as a Semver. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.contentSecurityPolicySetting">content_security_policy_setting</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a></code> | content_security_policy_setting block. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.widgetCustomizations">widget_customizations</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a></code> | widget_customizations block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `brand_id`<sup>Required</sup> <a name="brand_id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.brandId"></a>

```python
brand_id: str
```

- *Type:* str

brand id of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#brand_id CustomizedSigninPage#brand_id}

---

##### `page_content`<sup>Required</sup> <a name="page_content" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.pageContent"></a>

```python
page_content: str
```

- *Type:* str

page content of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#page_content CustomizedSigninPage#page_content}

---

##### `widget_version`<sup>Required</sup> <a name="widget_version" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.widgetVersion"></a>

```python
widget_version: str
```

- *Type:* str

widget version specified as a Semver.

The following are currently supported
*, ^1, ^2, ^3, ^4, ^5, ^6, ^7, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.1, 2.2, 2.3, 2.4,
2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11, 2.12, 2.13, 2.14, 2.15, 2.16, 2.17, 2.18, 2.19, 2.20, 2.21,
3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 5.0, 5.1, 5.2, 5.3,
5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.10, 5.11, 5.12, 5.13, 5.14, 5.15, 5.16, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5,
6.6, 6.7, 6.8, 6.9, 7.0, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 7.10, 7.11, 7.12, 7.13.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#widget_version CustomizedSigninPage#widget_version}

---

##### `content_security_policy_setting`<sup>Optional</sup> <a name="content_security_policy_setting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.contentSecurityPolicySetting"></a>

```python
content_security_policy_setting: CustomizedSigninPageContentSecurityPolicySetting
```

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a>

content_security_policy_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#content_security_policy_setting CustomizedSigninPage#content_security_policy_setting}

---

##### `widget_customizations`<sup>Optional</sup> <a name="widget_customizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.widgetCustomizations"></a>

```python
widget_customizations: CustomizedSigninPageWidgetCustomizations
```

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a>

widget_customizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#widget_customizations CustomizedSigninPage#widget_customizations}

---

### CustomizedSigninPageContentSecurityPolicySetting <a name="CustomizedSigninPageContentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import customized_signin_page

customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting(
  mode: str = None,
  report_uri: str = None,
  src_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.mode">mode</a></code> | <code>str</code> | enforced or report_only. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.reportUri">report_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#report_uri CustomizedSigninPage#report_uri}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.srcList">src_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#src_list CustomizedSigninPage#src_list}. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.mode"></a>

```python
mode: str
```

- *Type:* str

enforced or report_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#mode CustomizedSigninPage#mode}

---

##### `report_uri`<sup>Optional</sup> <a name="report_uri" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.reportUri"></a>

```python
report_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#report_uri CustomizedSigninPage#report_uri}.

---

##### `src_list`<sup>Optional</sup> <a name="src_list" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.srcList"></a>

```python
src_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#src_list CustomizedSigninPage#src_list}.

---

### CustomizedSigninPageWidgetCustomizations <a name="CustomizedSigninPageWidgetCustomizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import customized_signin_page

customizedSigninPage.CustomizedSigninPageWidgetCustomizations(
  widget_generation: str,
  authenticator_page_custom_link_label: str = None,
  authenticator_page_custom_link_url: str = None,
  classic_recovery_flow_email_or_username_label: str = None,
  custom_link1_label: str = None,
  custom_link1_url: str = None,
  custom_link2_label: str = None,
  custom_link2_url: str = None,
  forgot_password_label: str = None,
  forgot_password_url: str = None,
  help_label: str = None,
  help_url: str = None,
  password_info_tip: str = None,
  password_label: str = None,
  show_password_visibility_toggle: typing.Union[bool, IResolvable] = None,
  show_user_identifier: typing.Union[bool, IResolvable] = None,
  sign_in_label: str = None,
  unlock_account_label: str = None,
  unlock_account_url: str = None,
  username_info_tip: str = None,
  username_label: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.widgetGeneration">widget_generation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#widget_generation CustomizedSigninPage#widget_generation}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkLabel">authenticator_page_custom_link_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#authenticator_page_custom_link_label CustomizedSigninPage#authenticator_page_custom_link_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkUrl">authenticator_page_custom_link_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#authenticator_page_custom_link_url CustomizedSigninPage#authenticator_page_custom_link_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.classicRecoveryFlowEmailOrUsernameLabel">classic_recovery_flow_email_or_username_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#classic_recovery_flow_email_or_username_label CustomizedSigninPage#classic_recovery_flow_email_or_username_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Label">custom_link1_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#custom_link_1_label CustomizedSigninPage#custom_link_1_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Url">custom_link1_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#custom_link_1_url CustomizedSigninPage#custom_link_1_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Label">custom_link2_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#custom_link_2_label CustomizedSigninPage#custom_link_2_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Url">custom_link2_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#custom_link_2_url CustomizedSigninPage#custom_link_2_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordLabel">forgot_password_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#forgot_password_label CustomizedSigninPage#forgot_password_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordUrl">forgot_password_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#forgot_password_url CustomizedSigninPage#forgot_password_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpLabel">help_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#help_label CustomizedSigninPage#help_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpUrl">help_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#help_url CustomizedSigninPage#help_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordInfoTip">password_info_tip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#password_info_tip CustomizedSigninPage#password_info_tip}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordLabel">password_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#password_label CustomizedSigninPage#password_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showPasswordVisibilityToggle">show_password_visibility_toggle</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#show_password_visibility_toggle CustomizedSigninPage#show_password_visibility_toggle}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showUserIdentifier">show_user_identifier</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#show_user_identifier CustomizedSigninPage#show_user_identifier}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.signInLabel">sign_in_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#sign_in_label CustomizedSigninPage#sign_in_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountLabel">unlock_account_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#unlock_account_label CustomizedSigninPage#unlock_account_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountUrl">unlock_account_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#unlock_account_url CustomizedSigninPage#unlock_account_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameInfoTip">username_info_tip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#username_info_tip CustomizedSigninPage#username_info_tip}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameLabel">username_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#username_label CustomizedSigninPage#username_label}. |

---

##### `widget_generation`<sup>Required</sup> <a name="widget_generation" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.widgetGeneration"></a>

```python
widget_generation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#widget_generation CustomizedSigninPage#widget_generation}.

---

##### `authenticator_page_custom_link_label`<sup>Optional</sup> <a name="authenticator_page_custom_link_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkLabel"></a>

```python
authenticator_page_custom_link_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#authenticator_page_custom_link_label CustomizedSigninPage#authenticator_page_custom_link_label}.

---

##### `authenticator_page_custom_link_url`<sup>Optional</sup> <a name="authenticator_page_custom_link_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkUrl"></a>

```python
authenticator_page_custom_link_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#authenticator_page_custom_link_url CustomizedSigninPage#authenticator_page_custom_link_url}.

---

##### `classic_recovery_flow_email_or_username_label`<sup>Optional</sup> <a name="classic_recovery_flow_email_or_username_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.classicRecoveryFlowEmailOrUsernameLabel"></a>

```python
classic_recovery_flow_email_or_username_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#classic_recovery_flow_email_or_username_label CustomizedSigninPage#classic_recovery_flow_email_or_username_label}.

---

##### `custom_link1_label`<sup>Optional</sup> <a name="custom_link1_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Label"></a>

```python
custom_link1_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#custom_link_1_label CustomizedSigninPage#custom_link_1_label}.

---

##### `custom_link1_url`<sup>Optional</sup> <a name="custom_link1_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Url"></a>

```python
custom_link1_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#custom_link_1_url CustomizedSigninPage#custom_link_1_url}.

---

##### `custom_link2_label`<sup>Optional</sup> <a name="custom_link2_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Label"></a>

```python
custom_link2_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#custom_link_2_label CustomizedSigninPage#custom_link_2_label}.

---

##### `custom_link2_url`<sup>Optional</sup> <a name="custom_link2_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Url"></a>

```python
custom_link2_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#custom_link_2_url CustomizedSigninPage#custom_link_2_url}.

---

##### `forgot_password_label`<sup>Optional</sup> <a name="forgot_password_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordLabel"></a>

```python
forgot_password_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#forgot_password_label CustomizedSigninPage#forgot_password_label}.

---

##### `forgot_password_url`<sup>Optional</sup> <a name="forgot_password_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordUrl"></a>

```python
forgot_password_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#forgot_password_url CustomizedSigninPage#forgot_password_url}.

---

##### `help_label`<sup>Optional</sup> <a name="help_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpLabel"></a>

```python
help_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#help_label CustomizedSigninPage#help_label}.

---

##### `help_url`<sup>Optional</sup> <a name="help_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpUrl"></a>

```python
help_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#help_url CustomizedSigninPage#help_url}.

---

##### `password_info_tip`<sup>Optional</sup> <a name="password_info_tip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordInfoTip"></a>

```python
password_info_tip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#password_info_tip CustomizedSigninPage#password_info_tip}.

---

##### `password_label`<sup>Optional</sup> <a name="password_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordLabel"></a>

```python
password_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#password_label CustomizedSigninPage#password_label}.

---

##### `show_password_visibility_toggle`<sup>Optional</sup> <a name="show_password_visibility_toggle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showPasswordVisibilityToggle"></a>

```python
show_password_visibility_toggle: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#show_password_visibility_toggle CustomizedSigninPage#show_password_visibility_toggle}.

---

##### `show_user_identifier`<sup>Optional</sup> <a name="show_user_identifier" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showUserIdentifier"></a>

```python
show_user_identifier: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#show_user_identifier CustomizedSigninPage#show_user_identifier}.

---

##### `sign_in_label`<sup>Optional</sup> <a name="sign_in_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.signInLabel"></a>

```python
sign_in_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#sign_in_label CustomizedSigninPage#sign_in_label}.

---

##### `unlock_account_label`<sup>Optional</sup> <a name="unlock_account_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountLabel"></a>

```python
unlock_account_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#unlock_account_label CustomizedSigninPage#unlock_account_label}.

---

##### `unlock_account_url`<sup>Optional</sup> <a name="unlock_account_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountUrl"></a>

```python
unlock_account_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#unlock_account_url CustomizedSigninPage#unlock_account_url}.

---

##### `username_info_tip`<sup>Optional</sup> <a name="username_info_tip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameInfoTip"></a>

```python
username_info_tip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#username_info_tip CustomizedSigninPage#username_info_tip}.

---

##### `username_label`<sup>Optional</sup> <a name="username_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameLabel"></a>

```python
username_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/customized_signin_page#username_label CustomizedSigninPage#username_label}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomizedSigninPageContentSecurityPolicySettingOutputReference <a name="CustomizedSigninPageContentSecurityPolicySettingOutputReference" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import customized_signin_page

customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetReportUri">reset_report_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetSrcList">reset_src_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_report_uri` <a name="reset_report_uri" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetReportUri"></a>

```python
def reset_report_uri() -> None
```

##### `reset_src_list` <a name="reset_src_list" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetSrcList"></a>

```python
def reset_src_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUriInput">report_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcListInput">src_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUri">report_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcList">src_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `report_uri_input`<sup>Optional</sup> <a name="report_uri_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUriInput"></a>

```python
report_uri_input: str
```

- *Type:* str

---

##### `src_list_input`<sup>Optional</sup> <a name="src_list_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcListInput"></a>

```python
src_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `report_uri`<sup>Required</sup> <a name="report_uri" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUri"></a>

```python
report_uri: str
```

- *Type:* str

---

##### `src_list`<sup>Required</sup> <a name="src_list" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcList"></a>

```python
src_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CustomizedSigninPageContentSecurityPolicySetting]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a>]

---


### CustomizedSigninPageWidgetCustomizationsOutputReference <a name="CustomizedSigninPageWidgetCustomizationsOutputReference" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import customized_signin_page

customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkLabel">reset_authenticator_page_custom_link_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkUrl">reset_authenticator_page_custom_link_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetClassicRecoveryFlowEmailOrUsernameLabel">reset_classic_recovery_flow_email_or_username_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Label">reset_custom_link1_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Url">reset_custom_link1_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Label">reset_custom_link2_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Url">reset_custom_link2_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordLabel">reset_forgot_password_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordUrl">reset_forgot_password_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpLabel">reset_help_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpUrl">reset_help_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordInfoTip">reset_password_info_tip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordLabel">reset_password_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowPasswordVisibilityToggle">reset_show_password_visibility_toggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowUserIdentifier">reset_show_user_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetSignInLabel">reset_sign_in_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountLabel">reset_unlock_account_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountUrl">reset_unlock_account_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameInfoTip">reset_username_info_tip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameLabel">reset_username_label</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authenticator_page_custom_link_label` <a name="reset_authenticator_page_custom_link_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkLabel"></a>

```python
def reset_authenticator_page_custom_link_label() -> None
```

##### `reset_authenticator_page_custom_link_url` <a name="reset_authenticator_page_custom_link_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkUrl"></a>

```python
def reset_authenticator_page_custom_link_url() -> None
```

##### `reset_classic_recovery_flow_email_or_username_label` <a name="reset_classic_recovery_flow_email_or_username_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetClassicRecoveryFlowEmailOrUsernameLabel"></a>

```python
def reset_classic_recovery_flow_email_or_username_label() -> None
```

##### `reset_custom_link1_label` <a name="reset_custom_link1_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Label"></a>

```python
def reset_custom_link1_label() -> None
```

##### `reset_custom_link1_url` <a name="reset_custom_link1_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Url"></a>

```python
def reset_custom_link1_url() -> None
```

##### `reset_custom_link2_label` <a name="reset_custom_link2_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Label"></a>

```python
def reset_custom_link2_label() -> None
```

##### `reset_custom_link2_url` <a name="reset_custom_link2_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Url"></a>

```python
def reset_custom_link2_url() -> None
```

##### `reset_forgot_password_label` <a name="reset_forgot_password_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordLabel"></a>

```python
def reset_forgot_password_label() -> None
```

##### `reset_forgot_password_url` <a name="reset_forgot_password_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordUrl"></a>

```python
def reset_forgot_password_url() -> None
```

##### `reset_help_label` <a name="reset_help_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpLabel"></a>

```python
def reset_help_label() -> None
```

##### `reset_help_url` <a name="reset_help_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpUrl"></a>

```python
def reset_help_url() -> None
```

##### `reset_password_info_tip` <a name="reset_password_info_tip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordInfoTip"></a>

```python
def reset_password_info_tip() -> None
```

##### `reset_password_label` <a name="reset_password_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordLabel"></a>

```python
def reset_password_label() -> None
```

##### `reset_show_password_visibility_toggle` <a name="reset_show_password_visibility_toggle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowPasswordVisibilityToggle"></a>

```python
def reset_show_password_visibility_toggle() -> None
```

##### `reset_show_user_identifier` <a name="reset_show_user_identifier" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowUserIdentifier"></a>

```python
def reset_show_user_identifier() -> None
```

##### `reset_sign_in_label` <a name="reset_sign_in_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetSignInLabel"></a>

```python
def reset_sign_in_label() -> None
```

##### `reset_unlock_account_label` <a name="reset_unlock_account_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountLabel"></a>

```python
def reset_unlock_account_label() -> None
```

##### `reset_unlock_account_url` <a name="reset_unlock_account_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountUrl"></a>

```python
def reset_unlock_account_url() -> None
```

##### `reset_username_info_tip` <a name="reset_username_info_tip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameInfoTip"></a>

```python
def reset_username_info_tip() -> None
```

##### `reset_username_label` <a name="reset_username_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameLabel"></a>

```python
def reset_username_label() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabelInput">authenticator_page_custom_link_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrlInput">authenticator_page_custom_link_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabelInput">classic_recovery_flow_email_or_username_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1LabelInput">custom_link1_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1UrlInput">custom_link1_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2LabelInput">custom_link2_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2UrlInput">custom_link2_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabelInput">forgot_password_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrlInput">forgot_password_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabelInput">help_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrlInput">help_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTipInput">password_info_tip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabelInput">password_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggleInput">show_password_visibility_toggle_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifierInput">show_user_identifier_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabelInput">sign_in_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabelInput">unlock_account_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrlInput">unlock_account_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTipInput">username_info_tip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabelInput">username_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGenerationInput">widget_generation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabel">authenticator_page_custom_link_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrl">authenticator_page_custom_link_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabel">classic_recovery_flow_email_or_username_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Label">custom_link1_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Url">custom_link1_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Label">custom_link2_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Url">custom_link2_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabel">forgot_password_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrl">forgot_password_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabel">help_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrl">help_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTip">password_info_tip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabel">password_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggle">show_password_visibility_toggle</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifier">show_user_identifier</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabel">sign_in_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabel">unlock_account_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrl">unlock_account_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTip">username_info_tip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabel">username_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGeneration">widget_generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authenticator_page_custom_link_label_input`<sup>Optional</sup> <a name="authenticator_page_custom_link_label_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabelInput"></a>

```python
authenticator_page_custom_link_label_input: str
```

- *Type:* str

---

##### `authenticator_page_custom_link_url_input`<sup>Optional</sup> <a name="authenticator_page_custom_link_url_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrlInput"></a>

```python
authenticator_page_custom_link_url_input: str
```

- *Type:* str

---

##### `classic_recovery_flow_email_or_username_label_input`<sup>Optional</sup> <a name="classic_recovery_flow_email_or_username_label_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabelInput"></a>

```python
classic_recovery_flow_email_or_username_label_input: str
```

- *Type:* str

---

##### `custom_link1_label_input`<sup>Optional</sup> <a name="custom_link1_label_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1LabelInput"></a>

```python
custom_link1_label_input: str
```

- *Type:* str

---

##### `custom_link1_url_input`<sup>Optional</sup> <a name="custom_link1_url_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1UrlInput"></a>

```python
custom_link1_url_input: str
```

- *Type:* str

---

##### `custom_link2_label_input`<sup>Optional</sup> <a name="custom_link2_label_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2LabelInput"></a>

```python
custom_link2_label_input: str
```

- *Type:* str

---

##### `custom_link2_url_input`<sup>Optional</sup> <a name="custom_link2_url_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2UrlInput"></a>

```python
custom_link2_url_input: str
```

- *Type:* str

---

##### `forgot_password_label_input`<sup>Optional</sup> <a name="forgot_password_label_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabelInput"></a>

```python
forgot_password_label_input: str
```

- *Type:* str

---

##### `forgot_password_url_input`<sup>Optional</sup> <a name="forgot_password_url_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrlInput"></a>

```python
forgot_password_url_input: str
```

- *Type:* str

---

##### `help_label_input`<sup>Optional</sup> <a name="help_label_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabelInput"></a>

```python
help_label_input: str
```

- *Type:* str

---

##### `help_url_input`<sup>Optional</sup> <a name="help_url_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrlInput"></a>

```python
help_url_input: str
```

- *Type:* str

---

##### `password_info_tip_input`<sup>Optional</sup> <a name="password_info_tip_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTipInput"></a>

```python
password_info_tip_input: str
```

- *Type:* str

---

##### `password_label_input`<sup>Optional</sup> <a name="password_label_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabelInput"></a>

```python
password_label_input: str
```

- *Type:* str

---

##### `show_password_visibility_toggle_input`<sup>Optional</sup> <a name="show_password_visibility_toggle_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggleInput"></a>

```python
show_password_visibility_toggle_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `show_user_identifier_input`<sup>Optional</sup> <a name="show_user_identifier_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifierInput"></a>

```python
show_user_identifier_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sign_in_label_input`<sup>Optional</sup> <a name="sign_in_label_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabelInput"></a>

```python
sign_in_label_input: str
```

- *Type:* str

---

##### `unlock_account_label_input`<sup>Optional</sup> <a name="unlock_account_label_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabelInput"></a>

```python
unlock_account_label_input: str
```

- *Type:* str

---

##### `unlock_account_url_input`<sup>Optional</sup> <a name="unlock_account_url_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrlInput"></a>

```python
unlock_account_url_input: str
```

- *Type:* str

---

##### `username_info_tip_input`<sup>Optional</sup> <a name="username_info_tip_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTipInput"></a>

```python
username_info_tip_input: str
```

- *Type:* str

---

##### `username_label_input`<sup>Optional</sup> <a name="username_label_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabelInput"></a>

```python
username_label_input: str
```

- *Type:* str

---

##### `widget_generation_input`<sup>Optional</sup> <a name="widget_generation_input" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGenerationInput"></a>

```python
widget_generation_input: str
```

- *Type:* str

---

##### `authenticator_page_custom_link_label`<sup>Required</sup> <a name="authenticator_page_custom_link_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabel"></a>

```python
authenticator_page_custom_link_label: str
```

- *Type:* str

---

##### `authenticator_page_custom_link_url`<sup>Required</sup> <a name="authenticator_page_custom_link_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrl"></a>

```python
authenticator_page_custom_link_url: str
```

- *Type:* str

---

##### `classic_recovery_flow_email_or_username_label`<sup>Required</sup> <a name="classic_recovery_flow_email_or_username_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabel"></a>

```python
classic_recovery_flow_email_or_username_label: str
```

- *Type:* str

---

##### `custom_link1_label`<sup>Required</sup> <a name="custom_link1_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Label"></a>

```python
custom_link1_label: str
```

- *Type:* str

---

##### `custom_link1_url`<sup>Required</sup> <a name="custom_link1_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Url"></a>

```python
custom_link1_url: str
```

- *Type:* str

---

##### `custom_link2_label`<sup>Required</sup> <a name="custom_link2_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Label"></a>

```python
custom_link2_label: str
```

- *Type:* str

---

##### `custom_link2_url`<sup>Required</sup> <a name="custom_link2_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Url"></a>

```python
custom_link2_url: str
```

- *Type:* str

---

##### `forgot_password_label`<sup>Required</sup> <a name="forgot_password_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabel"></a>

```python
forgot_password_label: str
```

- *Type:* str

---

##### `forgot_password_url`<sup>Required</sup> <a name="forgot_password_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrl"></a>

```python
forgot_password_url: str
```

- *Type:* str

---

##### `help_label`<sup>Required</sup> <a name="help_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabel"></a>

```python
help_label: str
```

- *Type:* str

---

##### `help_url`<sup>Required</sup> <a name="help_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrl"></a>

```python
help_url: str
```

- *Type:* str

---

##### `password_info_tip`<sup>Required</sup> <a name="password_info_tip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTip"></a>

```python
password_info_tip: str
```

- *Type:* str

---

##### `password_label`<sup>Required</sup> <a name="password_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabel"></a>

```python
password_label: str
```

- *Type:* str

---

##### `show_password_visibility_toggle`<sup>Required</sup> <a name="show_password_visibility_toggle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggle"></a>

```python
show_password_visibility_toggle: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `show_user_identifier`<sup>Required</sup> <a name="show_user_identifier" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifier"></a>

```python
show_user_identifier: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sign_in_label`<sup>Required</sup> <a name="sign_in_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabel"></a>

```python
sign_in_label: str
```

- *Type:* str

---

##### `unlock_account_label`<sup>Required</sup> <a name="unlock_account_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabel"></a>

```python
unlock_account_label: str
```

- *Type:* str

---

##### `unlock_account_url`<sup>Required</sup> <a name="unlock_account_url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrl"></a>

```python
unlock_account_url: str
```

- *Type:* str

---

##### `username_info_tip`<sup>Required</sup> <a name="username_info_tip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTip"></a>

```python
username_info_tip: str
```

- *Type:* str

---

##### `username_label`<sup>Required</sup> <a name="username_label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabel"></a>

```python
username_label: str
```

- *Type:* str

---

##### `widget_generation`<sup>Required</sup> <a name="widget_generation" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGeneration"></a>

```python
widget_generation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CustomizedSigninPageWidgetCustomizations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a>]

---



