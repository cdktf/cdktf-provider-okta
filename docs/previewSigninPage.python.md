# `previewSigninPage` Submodule <a name="`previewSigninPage` Submodule" id="@cdktf/provider-okta.previewSigninPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PreviewSigninPage <a name="PreviewSigninPage" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page okta_preview_signin_page}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import preview_signin_page

previewSigninPage.PreviewSigninPage(
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
  content_security_policy_setting: PreviewSigninPageContentSecurityPolicySetting = None,
  widget_customizations: PreviewSigninPageWidgetCustomizations = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.brandId">brand_id</a></code> | <code>str</code> | brand id of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.pageContent">page_content</a></code> | <code>str</code> | page content of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.widgetVersion">widget_version</a></code> | <code>str</code> | widget version specified as a Semver. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.contentSecurityPolicySetting">content_security_policy_setting</a></code> | <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting">PreviewSigninPageContentSecurityPolicySetting</a></code> | content_security_policy_setting block. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.widgetCustomizations">widget_customizations</a></code> | <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations">PreviewSigninPageWidgetCustomizations</a></code> | widget_customizations block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `brand_id`<sup>Required</sup> <a name="brand_id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.brandId"></a>

- *Type:* str

brand id of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#brand_id PreviewSigninPage#brand_id}

---

##### `page_content`<sup>Required</sup> <a name="page_content" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.pageContent"></a>

- *Type:* str

page content of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#page_content PreviewSigninPage#page_content}

---

##### `widget_version`<sup>Required</sup> <a name="widget_version" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.widgetVersion"></a>

- *Type:* str

widget version specified as a Semver.

The following are currently supported
*, ^1, ^2, ^3, ^4, ^5, ^6, ^7, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.1, 2.2, 2.3, 2.4,
2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11, 2.12, 2.13, 2.14, 2.15, 2.16, 2.17, 2.18, 2.19, 2.20, 2.21,
3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 5.0, 5.1, 5.2, 5.3,
5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.10, 5.11, 5.12, 5.13, 5.14, 5.15, 5.16, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5,
6.6, 6.7, 6.8, 6.9, 7.0, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 7.10, 7.11, 7.12, 7.13.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#widget_version PreviewSigninPage#widget_version}

---

##### `content_security_policy_setting`<sup>Optional</sup> <a name="content_security_policy_setting" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.contentSecurityPolicySetting"></a>

- *Type:* <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting">PreviewSigninPageContentSecurityPolicySetting</a>

content_security_policy_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#content_security_policy_setting PreviewSigninPage#content_security_policy_setting}

---

##### `widget_customizations`<sup>Optional</sup> <a name="widget_customizations" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.widgetCustomizations"></a>

- *Type:* <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations">PreviewSigninPageWidgetCustomizations</a>

widget_customizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#widget_customizations PreviewSigninPage#widget_customizations}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putContentSecurityPolicySetting">put_content_security_policy_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations">put_widget_customizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.resetContentSecurityPolicySetting">reset_content_security_policy_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.resetWidgetCustomizations">reset_widget_customizations</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_content_security_policy_setting` <a name="put_content_security_policy_setting" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putContentSecurityPolicySetting"></a>

```python
def put_content_security_policy_setting(
  mode: str = None,
  report_uri: str = None,
  src_list: typing.List[str] = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putContentSecurityPolicySetting.parameter.mode"></a>

- *Type:* str

enforced or report_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#mode PreviewSigninPage#mode}

---

###### `report_uri`<sup>Optional</sup> <a name="report_uri" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putContentSecurityPolicySetting.parameter.reportUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#report_uri PreviewSigninPage#report_uri}.

---

###### `src_list`<sup>Optional</sup> <a name="src_list" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putContentSecurityPolicySetting.parameter.srcList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#src_list PreviewSigninPage#src_list}.

---

##### `put_widget_customizations` <a name="put_widget_customizations" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations"></a>

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

###### `widget_generation`<sup>Required</sup> <a name="widget_generation" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.widgetGeneration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#widget_generation PreviewSigninPage#widget_generation}.

---

###### `authenticator_page_custom_link_label`<sup>Optional</sup> <a name="authenticator_page_custom_link_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.authenticatorPageCustomLinkLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#authenticator_page_custom_link_label PreviewSigninPage#authenticator_page_custom_link_label}.

---

###### `authenticator_page_custom_link_url`<sup>Optional</sup> <a name="authenticator_page_custom_link_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.authenticatorPageCustomLinkUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#authenticator_page_custom_link_url PreviewSigninPage#authenticator_page_custom_link_url}.

---

###### `classic_recovery_flow_email_or_username_label`<sup>Optional</sup> <a name="classic_recovery_flow_email_or_username_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.classicRecoveryFlowEmailOrUsernameLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#classic_recovery_flow_email_or_username_label PreviewSigninPage#classic_recovery_flow_email_or_username_label}.

---

###### `custom_link1_label`<sup>Optional</sup> <a name="custom_link1_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.customLink1Label"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#custom_link_1_label PreviewSigninPage#custom_link_1_label}.

---

###### `custom_link1_url`<sup>Optional</sup> <a name="custom_link1_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.customLink1Url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#custom_link_1_url PreviewSigninPage#custom_link_1_url}.

---

###### `custom_link2_label`<sup>Optional</sup> <a name="custom_link2_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.customLink2Label"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#custom_link_2_label PreviewSigninPage#custom_link_2_label}.

---

###### `custom_link2_url`<sup>Optional</sup> <a name="custom_link2_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.customLink2Url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#custom_link_2_url PreviewSigninPage#custom_link_2_url}.

---

###### `forgot_password_label`<sup>Optional</sup> <a name="forgot_password_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.forgotPasswordLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#forgot_password_label PreviewSigninPage#forgot_password_label}.

---

###### `forgot_password_url`<sup>Optional</sup> <a name="forgot_password_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.forgotPasswordUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#forgot_password_url PreviewSigninPage#forgot_password_url}.

---

###### `help_label`<sup>Optional</sup> <a name="help_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.helpLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#help_label PreviewSigninPage#help_label}.

---

###### `help_url`<sup>Optional</sup> <a name="help_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.helpUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#help_url PreviewSigninPage#help_url}.

---

###### `password_info_tip`<sup>Optional</sup> <a name="password_info_tip" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.passwordInfoTip"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#password_info_tip PreviewSigninPage#password_info_tip}.

---

###### `password_label`<sup>Optional</sup> <a name="password_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.passwordLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#password_label PreviewSigninPage#password_label}.

---

###### `show_password_visibility_toggle`<sup>Optional</sup> <a name="show_password_visibility_toggle" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.showPasswordVisibilityToggle"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#show_password_visibility_toggle PreviewSigninPage#show_password_visibility_toggle}.

---

###### `show_user_identifier`<sup>Optional</sup> <a name="show_user_identifier" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.showUserIdentifier"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#show_user_identifier PreviewSigninPage#show_user_identifier}.

---

###### `sign_in_label`<sup>Optional</sup> <a name="sign_in_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.signInLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#sign_in_label PreviewSigninPage#sign_in_label}.

---

###### `unlock_account_label`<sup>Optional</sup> <a name="unlock_account_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.unlockAccountLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#unlock_account_label PreviewSigninPage#unlock_account_label}.

---

###### `unlock_account_url`<sup>Optional</sup> <a name="unlock_account_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.unlockAccountUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#unlock_account_url PreviewSigninPage#unlock_account_url}.

---

###### `username_info_tip`<sup>Optional</sup> <a name="username_info_tip" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.usernameInfoTip"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#username_info_tip PreviewSigninPage#username_info_tip}.

---

###### `username_label`<sup>Optional</sup> <a name="username_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.usernameLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#username_label PreviewSigninPage#username_label}.

---

##### `reset_content_security_policy_setting` <a name="reset_content_security_policy_setting" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.resetContentSecurityPolicySetting"></a>

```python
def reset_content_security_policy_setting() -> None
```

##### `reset_widget_customizations` <a name="reset_widget_customizations" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.resetWidgetCustomizations"></a>

```python
def reset_widget_customizations() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PreviewSigninPage resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import preview_signin_page

previewSigninPage.PreviewSigninPage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import preview_signin_page

previewSigninPage.PreviewSigninPage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import preview_signin_page

previewSigninPage.PreviewSigninPage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import preview_signin_page

previewSigninPage.PreviewSigninPage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PreviewSigninPage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PreviewSigninPage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PreviewSigninPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PreviewSigninPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.contentSecurityPolicySetting">content_security_policy_setting</a></code> | <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference">PreviewSigninPageContentSecurityPolicySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.widgetCustomizations">widget_customizations</a></code> | <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference">PreviewSigninPageWidgetCustomizationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.brandIdInput">brand_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.contentSecurityPolicySettingInput">content_security_policy_setting_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting">PreviewSigninPageContentSecurityPolicySetting</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.pageContentInput">page_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.widgetCustomizationsInput">widget_customizations_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations">PreviewSigninPageWidgetCustomizations</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.widgetVersionInput">widget_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.brandId">brand_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.pageContent">page_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.widgetVersion">widget_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content_security_policy_setting`<sup>Required</sup> <a name="content_security_policy_setting" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.contentSecurityPolicySetting"></a>

```python
content_security_policy_setting: PreviewSigninPageContentSecurityPolicySettingOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference">PreviewSigninPageContentSecurityPolicySettingOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `widget_customizations`<sup>Required</sup> <a name="widget_customizations" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.widgetCustomizations"></a>

```python
widget_customizations: PreviewSigninPageWidgetCustomizationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference">PreviewSigninPageWidgetCustomizationsOutputReference</a>

---

##### `brand_id_input`<sup>Optional</sup> <a name="brand_id_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.brandIdInput"></a>

```python
brand_id_input: str
```

- *Type:* str

---

##### `content_security_policy_setting_input`<sup>Optional</sup> <a name="content_security_policy_setting_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.contentSecurityPolicySettingInput"></a>

```python
content_security_policy_setting_input: typing.Union[IResolvable, PreviewSigninPageContentSecurityPolicySetting]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting">PreviewSigninPageContentSecurityPolicySetting</a>]

---

##### `page_content_input`<sup>Optional</sup> <a name="page_content_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.pageContentInput"></a>

```python
page_content_input: str
```

- *Type:* str

---

##### `widget_customizations_input`<sup>Optional</sup> <a name="widget_customizations_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.widgetCustomizationsInput"></a>

```python
widget_customizations_input: typing.Union[IResolvable, PreviewSigninPageWidgetCustomizations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations">PreviewSigninPageWidgetCustomizations</a>]

---

##### `widget_version_input`<sup>Optional</sup> <a name="widget_version_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.widgetVersionInput"></a>

```python
widget_version_input: str
```

- *Type:* str

---

##### `brand_id`<sup>Required</sup> <a name="brand_id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.brandId"></a>

```python
brand_id: str
```

- *Type:* str

---

##### `page_content`<sup>Required</sup> <a name="page_content" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.pageContent"></a>

```python
page_content: str
```

- *Type:* str

---

##### `widget_version`<sup>Required</sup> <a name="widget_version" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.widgetVersion"></a>

```python
widget_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PreviewSigninPageConfig <a name="PreviewSigninPageConfig" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import preview_signin_page

previewSigninPage.PreviewSigninPageConfig(
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
  content_security_policy_setting: PreviewSigninPageContentSecurityPolicySetting = None,
  widget_customizations: PreviewSigninPageWidgetCustomizations = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.brandId">brand_id</a></code> | <code>str</code> | brand id of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.pageContent">page_content</a></code> | <code>str</code> | page content of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.widgetVersion">widget_version</a></code> | <code>str</code> | widget version specified as a Semver. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.contentSecurityPolicySetting">content_security_policy_setting</a></code> | <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting">PreviewSigninPageContentSecurityPolicySetting</a></code> | content_security_policy_setting block. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.widgetCustomizations">widget_customizations</a></code> | <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations">PreviewSigninPageWidgetCustomizations</a></code> | widget_customizations block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `brand_id`<sup>Required</sup> <a name="brand_id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.brandId"></a>

```python
brand_id: str
```

- *Type:* str

brand id of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#brand_id PreviewSigninPage#brand_id}

---

##### `page_content`<sup>Required</sup> <a name="page_content" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.pageContent"></a>

```python
page_content: str
```

- *Type:* str

page content of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#page_content PreviewSigninPage#page_content}

---

##### `widget_version`<sup>Required</sup> <a name="widget_version" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.widgetVersion"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#widget_version PreviewSigninPage#widget_version}

---

##### `content_security_policy_setting`<sup>Optional</sup> <a name="content_security_policy_setting" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.contentSecurityPolicySetting"></a>

```python
content_security_policy_setting: PreviewSigninPageContentSecurityPolicySetting
```

- *Type:* <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting">PreviewSigninPageContentSecurityPolicySetting</a>

content_security_policy_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#content_security_policy_setting PreviewSigninPage#content_security_policy_setting}

---

##### `widget_customizations`<sup>Optional</sup> <a name="widget_customizations" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.widgetCustomizations"></a>

```python
widget_customizations: PreviewSigninPageWidgetCustomizations
```

- *Type:* <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations">PreviewSigninPageWidgetCustomizations</a>

widget_customizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#widget_customizations PreviewSigninPage#widget_customizations}

---

### PreviewSigninPageContentSecurityPolicySetting <a name="PreviewSigninPageContentSecurityPolicySetting" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import preview_signin_page

previewSigninPage.PreviewSigninPageContentSecurityPolicySetting(
  mode: str = None,
  report_uri: str = None,
  src_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting.property.mode">mode</a></code> | <code>str</code> | enforced or report_only. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting.property.reportUri">report_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#report_uri PreviewSigninPage#report_uri}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting.property.srcList">src_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#src_list PreviewSigninPage#src_list}. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting.property.mode"></a>

```python
mode: str
```

- *Type:* str

enforced or report_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#mode PreviewSigninPage#mode}

---

##### `report_uri`<sup>Optional</sup> <a name="report_uri" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting.property.reportUri"></a>

```python
report_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#report_uri PreviewSigninPage#report_uri}.

---

##### `src_list`<sup>Optional</sup> <a name="src_list" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting.property.srcList"></a>

```python
src_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#src_list PreviewSigninPage#src_list}.

---

### PreviewSigninPageWidgetCustomizations <a name="PreviewSigninPageWidgetCustomizations" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import preview_signin_page

previewSigninPage.PreviewSigninPageWidgetCustomizations(
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
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.widgetGeneration">widget_generation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#widget_generation PreviewSigninPage#widget_generation}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkLabel">authenticator_page_custom_link_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#authenticator_page_custom_link_label PreviewSigninPage#authenticator_page_custom_link_label}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkUrl">authenticator_page_custom_link_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#authenticator_page_custom_link_url PreviewSigninPage#authenticator_page_custom_link_url}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.classicRecoveryFlowEmailOrUsernameLabel">classic_recovery_flow_email_or_username_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#classic_recovery_flow_email_or_username_label PreviewSigninPage#classic_recovery_flow_email_or_username_label}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.customLink1Label">custom_link1_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#custom_link_1_label PreviewSigninPage#custom_link_1_label}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.customLink1Url">custom_link1_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#custom_link_1_url PreviewSigninPage#custom_link_1_url}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.customLink2Label">custom_link2_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#custom_link_2_label PreviewSigninPage#custom_link_2_label}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.customLink2Url">custom_link2_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#custom_link_2_url PreviewSigninPage#custom_link_2_url}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.forgotPasswordLabel">forgot_password_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#forgot_password_label PreviewSigninPage#forgot_password_label}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.forgotPasswordUrl">forgot_password_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#forgot_password_url PreviewSigninPage#forgot_password_url}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.helpLabel">help_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#help_label PreviewSigninPage#help_label}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.helpUrl">help_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#help_url PreviewSigninPage#help_url}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.passwordInfoTip">password_info_tip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#password_info_tip PreviewSigninPage#password_info_tip}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.passwordLabel">password_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#password_label PreviewSigninPage#password_label}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.showPasswordVisibilityToggle">show_password_visibility_toggle</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#show_password_visibility_toggle PreviewSigninPage#show_password_visibility_toggle}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.showUserIdentifier">show_user_identifier</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#show_user_identifier PreviewSigninPage#show_user_identifier}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.signInLabel">sign_in_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#sign_in_label PreviewSigninPage#sign_in_label}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.unlockAccountLabel">unlock_account_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#unlock_account_label PreviewSigninPage#unlock_account_label}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.unlockAccountUrl">unlock_account_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#unlock_account_url PreviewSigninPage#unlock_account_url}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.usernameInfoTip">username_info_tip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#username_info_tip PreviewSigninPage#username_info_tip}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.usernameLabel">username_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#username_label PreviewSigninPage#username_label}. |

---

##### `widget_generation`<sup>Required</sup> <a name="widget_generation" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.widgetGeneration"></a>

```python
widget_generation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#widget_generation PreviewSigninPage#widget_generation}.

---

##### `authenticator_page_custom_link_label`<sup>Optional</sup> <a name="authenticator_page_custom_link_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkLabel"></a>

```python
authenticator_page_custom_link_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#authenticator_page_custom_link_label PreviewSigninPage#authenticator_page_custom_link_label}.

---

##### `authenticator_page_custom_link_url`<sup>Optional</sup> <a name="authenticator_page_custom_link_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkUrl"></a>

```python
authenticator_page_custom_link_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#authenticator_page_custom_link_url PreviewSigninPage#authenticator_page_custom_link_url}.

---

##### `classic_recovery_flow_email_or_username_label`<sup>Optional</sup> <a name="classic_recovery_flow_email_or_username_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.classicRecoveryFlowEmailOrUsernameLabel"></a>

```python
classic_recovery_flow_email_or_username_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#classic_recovery_flow_email_or_username_label PreviewSigninPage#classic_recovery_flow_email_or_username_label}.

---

##### `custom_link1_label`<sup>Optional</sup> <a name="custom_link1_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.customLink1Label"></a>

```python
custom_link1_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#custom_link_1_label PreviewSigninPage#custom_link_1_label}.

---

##### `custom_link1_url`<sup>Optional</sup> <a name="custom_link1_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.customLink1Url"></a>

```python
custom_link1_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#custom_link_1_url PreviewSigninPage#custom_link_1_url}.

---

##### `custom_link2_label`<sup>Optional</sup> <a name="custom_link2_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.customLink2Label"></a>

```python
custom_link2_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#custom_link_2_label PreviewSigninPage#custom_link_2_label}.

---

##### `custom_link2_url`<sup>Optional</sup> <a name="custom_link2_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.customLink2Url"></a>

```python
custom_link2_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#custom_link_2_url PreviewSigninPage#custom_link_2_url}.

---

##### `forgot_password_label`<sup>Optional</sup> <a name="forgot_password_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.forgotPasswordLabel"></a>

```python
forgot_password_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#forgot_password_label PreviewSigninPage#forgot_password_label}.

---

##### `forgot_password_url`<sup>Optional</sup> <a name="forgot_password_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.forgotPasswordUrl"></a>

```python
forgot_password_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#forgot_password_url PreviewSigninPage#forgot_password_url}.

---

##### `help_label`<sup>Optional</sup> <a name="help_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.helpLabel"></a>

```python
help_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#help_label PreviewSigninPage#help_label}.

---

##### `help_url`<sup>Optional</sup> <a name="help_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.helpUrl"></a>

```python
help_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#help_url PreviewSigninPage#help_url}.

---

##### `password_info_tip`<sup>Optional</sup> <a name="password_info_tip" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.passwordInfoTip"></a>

```python
password_info_tip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#password_info_tip PreviewSigninPage#password_info_tip}.

---

##### `password_label`<sup>Optional</sup> <a name="password_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.passwordLabel"></a>

```python
password_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#password_label PreviewSigninPage#password_label}.

---

##### `show_password_visibility_toggle`<sup>Optional</sup> <a name="show_password_visibility_toggle" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.showPasswordVisibilityToggle"></a>

```python
show_password_visibility_toggle: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#show_password_visibility_toggle PreviewSigninPage#show_password_visibility_toggle}.

---

##### `show_user_identifier`<sup>Optional</sup> <a name="show_user_identifier" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.showUserIdentifier"></a>

```python
show_user_identifier: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#show_user_identifier PreviewSigninPage#show_user_identifier}.

---

##### `sign_in_label`<sup>Optional</sup> <a name="sign_in_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.signInLabel"></a>

```python
sign_in_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#sign_in_label PreviewSigninPage#sign_in_label}.

---

##### `unlock_account_label`<sup>Optional</sup> <a name="unlock_account_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.unlockAccountLabel"></a>

```python
unlock_account_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#unlock_account_label PreviewSigninPage#unlock_account_label}.

---

##### `unlock_account_url`<sup>Optional</sup> <a name="unlock_account_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.unlockAccountUrl"></a>

```python
unlock_account_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#unlock_account_url PreviewSigninPage#unlock_account_url}.

---

##### `username_info_tip`<sup>Optional</sup> <a name="username_info_tip" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.usernameInfoTip"></a>

```python
username_info_tip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#username_info_tip PreviewSigninPage#username_info_tip}.

---

##### `username_label`<sup>Optional</sup> <a name="username_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.usernameLabel"></a>

```python
username_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/preview_signin_page#username_label PreviewSigninPage#username_label}.

---

## Classes <a name="Classes" id="Classes"></a>

### PreviewSigninPageContentSecurityPolicySettingOutputReference <a name="PreviewSigninPageContentSecurityPolicySettingOutputReference" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import preview_signin_page

previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.resetReportUri">reset_report_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.resetSrcList">reset_src_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_report_uri` <a name="reset_report_uri" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.resetReportUri"></a>

```python
def reset_report_uri() -> None
```

##### `reset_src_list` <a name="reset_src_list" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.resetSrcList"></a>

```python
def reset_src_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.reportUriInput">report_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.srcListInput">src_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.reportUri">report_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.srcList">src_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting">PreviewSigninPageContentSecurityPolicySetting</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `report_uri_input`<sup>Optional</sup> <a name="report_uri_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.reportUriInput"></a>

```python
report_uri_input: str
```

- *Type:* str

---

##### `src_list_input`<sup>Optional</sup> <a name="src_list_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.srcListInput"></a>

```python
src_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `report_uri`<sup>Required</sup> <a name="report_uri" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.reportUri"></a>

```python
report_uri: str
```

- *Type:* str

---

##### `src_list`<sup>Required</sup> <a name="src_list" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.srcList"></a>

```python
src_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PreviewSigninPageContentSecurityPolicySetting]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting">PreviewSigninPageContentSecurityPolicySetting</a>]

---


### PreviewSigninPageWidgetCustomizationsOutputReference <a name="PreviewSigninPageWidgetCustomizationsOutputReference" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import preview_signin_page

previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkLabel">reset_authenticator_page_custom_link_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkUrl">reset_authenticator_page_custom_link_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetClassicRecoveryFlowEmailOrUsernameLabel">reset_classic_recovery_flow_email_or_username_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Label">reset_custom_link1_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Url">reset_custom_link1_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Label">reset_custom_link2_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Url">reset_custom_link2_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordLabel">reset_forgot_password_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordUrl">reset_forgot_password_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetHelpLabel">reset_help_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetHelpUrl">reset_help_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetPasswordInfoTip">reset_password_info_tip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetPasswordLabel">reset_password_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetShowPasswordVisibilityToggle">reset_show_password_visibility_toggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetShowUserIdentifier">reset_show_user_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetSignInLabel">reset_sign_in_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountLabel">reset_unlock_account_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountUrl">reset_unlock_account_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetUsernameInfoTip">reset_username_info_tip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetUsernameLabel">reset_username_label</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authenticator_page_custom_link_label` <a name="reset_authenticator_page_custom_link_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkLabel"></a>

```python
def reset_authenticator_page_custom_link_label() -> None
```

##### `reset_authenticator_page_custom_link_url` <a name="reset_authenticator_page_custom_link_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkUrl"></a>

```python
def reset_authenticator_page_custom_link_url() -> None
```

##### `reset_classic_recovery_flow_email_or_username_label` <a name="reset_classic_recovery_flow_email_or_username_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetClassicRecoveryFlowEmailOrUsernameLabel"></a>

```python
def reset_classic_recovery_flow_email_or_username_label() -> None
```

##### `reset_custom_link1_label` <a name="reset_custom_link1_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Label"></a>

```python
def reset_custom_link1_label() -> None
```

##### `reset_custom_link1_url` <a name="reset_custom_link1_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Url"></a>

```python
def reset_custom_link1_url() -> None
```

##### `reset_custom_link2_label` <a name="reset_custom_link2_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Label"></a>

```python
def reset_custom_link2_label() -> None
```

##### `reset_custom_link2_url` <a name="reset_custom_link2_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Url"></a>

```python
def reset_custom_link2_url() -> None
```

##### `reset_forgot_password_label` <a name="reset_forgot_password_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordLabel"></a>

```python
def reset_forgot_password_label() -> None
```

##### `reset_forgot_password_url` <a name="reset_forgot_password_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordUrl"></a>

```python
def reset_forgot_password_url() -> None
```

##### `reset_help_label` <a name="reset_help_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetHelpLabel"></a>

```python
def reset_help_label() -> None
```

##### `reset_help_url` <a name="reset_help_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetHelpUrl"></a>

```python
def reset_help_url() -> None
```

##### `reset_password_info_tip` <a name="reset_password_info_tip" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetPasswordInfoTip"></a>

```python
def reset_password_info_tip() -> None
```

##### `reset_password_label` <a name="reset_password_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetPasswordLabel"></a>

```python
def reset_password_label() -> None
```

##### `reset_show_password_visibility_toggle` <a name="reset_show_password_visibility_toggle" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetShowPasswordVisibilityToggle"></a>

```python
def reset_show_password_visibility_toggle() -> None
```

##### `reset_show_user_identifier` <a name="reset_show_user_identifier" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetShowUserIdentifier"></a>

```python
def reset_show_user_identifier() -> None
```

##### `reset_sign_in_label` <a name="reset_sign_in_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetSignInLabel"></a>

```python
def reset_sign_in_label() -> None
```

##### `reset_unlock_account_label` <a name="reset_unlock_account_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountLabel"></a>

```python
def reset_unlock_account_label() -> None
```

##### `reset_unlock_account_url` <a name="reset_unlock_account_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountUrl"></a>

```python
def reset_unlock_account_url() -> None
```

##### `reset_username_info_tip` <a name="reset_username_info_tip" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetUsernameInfoTip"></a>

```python
def reset_username_info_tip() -> None
```

##### `reset_username_label` <a name="reset_username_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetUsernameLabel"></a>

```python
def reset_username_label() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabelInput">authenticator_page_custom_link_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrlInput">authenticator_page_custom_link_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabelInput">classic_recovery_flow_email_or_username_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink1LabelInput">custom_link1_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink1UrlInput">custom_link1_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink2LabelInput">custom_link2_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink2UrlInput">custom_link2_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabelInput">forgot_password_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrlInput">forgot_password_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.helpLabelInput">help_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.helpUrlInput">help_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTipInput">password_info_tip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.passwordLabelInput">password_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggleInput">show_password_visibility_toggle_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifierInput">show_user_identifier_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.signInLabelInput">sign_in_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabelInput">unlock_account_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrlInput">unlock_account_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTipInput">username_info_tip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.usernameLabelInput">username_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.widgetGenerationInput">widget_generation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabel">authenticator_page_custom_link_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrl">authenticator_page_custom_link_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabel">classic_recovery_flow_email_or_username_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink1Label">custom_link1_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink1Url">custom_link1_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink2Label">custom_link2_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink2Url">custom_link2_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabel">forgot_password_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrl">forgot_password_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.helpLabel">help_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.helpUrl">help_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTip">password_info_tip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.passwordLabel">password_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggle">show_password_visibility_toggle</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifier">show_user_identifier</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.signInLabel">sign_in_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabel">unlock_account_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrl">unlock_account_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTip">username_info_tip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.usernameLabel">username_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.widgetGeneration">widget_generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations">PreviewSigninPageWidgetCustomizations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authenticator_page_custom_link_label_input`<sup>Optional</sup> <a name="authenticator_page_custom_link_label_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabelInput"></a>

```python
authenticator_page_custom_link_label_input: str
```

- *Type:* str

---

##### `authenticator_page_custom_link_url_input`<sup>Optional</sup> <a name="authenticator_page_custom_link_url_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrlInput"></a>

```python
authenticator_page_custom_link_url_input: str
```

- *Type:* str

---

##### `classic_recovery_flow_email_or_username_label_input`<sup>Optional</sup> <a name="classic_recovery_flow_email_or_username_label_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabelInput"></a>

```python
classic_recovery_flow_email_or_username_label_input: str
```

- *Type:* str

---

##### `custom_link1_label_input`<sup>Optional</sup> <a name="custom_link1_label_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink1LabelInput"></a>

```python
custom_link1_label_input: str
```

- *Type:* str

---

##### `custom_link1_url_input`<sup>Optional</sup> <a name="custom_link1_url_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink1UrlInput"></a>

```python
custom_link1_url_input: str
```

- *Type:* str

---

##### `custom_link2_label_input`<sup>Optional</sup> <a name="custom_link2_label_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink2LabelInput"></a>

```python
custom_link2_label_input: str
```

- *Type:* str

---

##### `custom_link2_url_input`<sup>Optional</sup> <a name="custom_link2_url_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink2UrlInput"></a>

```python
custom_link2_url_input: str
```

- *Type:* str

---

##### `forgot_password_label_input`<sup>Optional</sup> <a name="forgot_password_label_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabelInput"></a>

```python
forgot_password_label_input: str
```

- *Type:* str

---

##### `forgot_password_url_input`<sup>Optional</sup> <a name="forgot_password_url_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrlInput"></a>

```python
forgot_password_url_input: str
```

- *Type:* str

---

##### `help_label_input`<sup>Optional</sup> <a name="help_label_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.helpLabelInput"></a>

```python
help_label_input: str
```

- *Type:* str

---

##### `help_url_input`<sup>Optional</sup> <a name="help_url_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.helpUrlInput"></a>

```python
help_url_input: str
```

- *Type:* str

---

##### `password_info_tip_input`<sup>Optional</sup> <a name="password_info_tip_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTipInput"></a>

```python
password_info_tip_input: str
```

- *Type:* str

---

##### `password_label_input`<sup>Optional</sup> <a name="password_label_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.passwordLabelInput"></a>

```python
password_label_input: str
```

- *Type:* str

---

##### `show_password_visibility_toggle_input`<sup>Optional</sup> <a name="show_password_visibility_toggle_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggleInput"></a>

```python
show_password_visibility_toggle_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `show_user_identifier_input`<sup>Optional</sup> <a name="show_user_identifier_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifierInput"></a>

```python
show_user_identifier_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sign_in_label_input`<sup>Optional</sup> <a name="sign_in_label_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.signInLabelInput"></a>

```python
sign_in_label_input: str
```

- *Type:* str

---

##### `unlock_account_label_input`<sup>Optional</sup> <a name="unlock_account_label_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabelInput"></a>

```python
unlock_account_label_input: str
```

- *Type:* str

---

##### `unlock_account_url_input`<sup>Optional</sup> <a name="unlock_account_url_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrlInput"></a>

```python
unlock_account_url_input: str
```

- *Type:* str

---

##### `username_info_tip_input`<sup>Optional</sup> <a name="username_info_tip_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTipInput"></a>

```python
username_info_tip_input: str
```

- *Type:* str

---

##### `username_label_input`<sup>Optional</sup> <a name="username_label_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.usernameLabelInput"></a>

```python
username_label_input: str
```

- *Type:* str

---

##### `widget_generation_input`<sup>Optional</sup> <a name="widget_generation_input" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.widgetGenerationInput"></a>

```python
widget_generation_input: str
```

- *Type:* str

---

##### `authenticator_page_custom_link_label`<sup>Required</sup> <a name="authenticator_page_custom_link_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabel"></a>

```python
authenticator_page_custom_link_label: str
```

- *Type:* str

---

##### `authenticator_page_custom_link_url`<sup>Required</sup> <a name="authenticator_page_custom_link_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrl"></a>

```python
authenticator_page_custom_link_url: str
```

- *Type:* str

---

##### `classic_recovery_flow_email_or_username_label`<sup>Required</sup> <a name="classic_recovery_flow_email_or_username_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabel"></a>

```python
classic_recovery_flow_email_or_username_label: str
```

- *Type:* str

---

##### `custom_link1_label`<sup>Required</sup> <a name="custom_link1_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink1Label"></a>

```python
custom_link1_label: str
```

- *Type:* str

---

##### `custom_link1_url`<sup>Required</sup> <a name="custom_link1_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink1Url"></a>

```python
custom_link1_url: str
```

- *Type:* str

---

##### `custom_link2_label`<sup>Required</sup> <a name="custom_link2_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink2Label"></a>

```python
custom_link2_label: str
```

- *Type:* str

---

##### `custom_link2_url`<sup>Required</sup> <a name="custom_link2_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink2Url"></a>

```python
custom_link2_url: str
```

- *Type:* str

---

##### `forgot_password_label`<sup>Required</sup> <a name="forgot_password_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabel"></a>

```python
forgot_password_label: str
```

- *Type:* str

---

##### `forgot_password_url`<sup>Required</sup> <a name="forgot_password_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrl"></a>

```python
forgot_password_url: str
```

- *Type:* str

---

##### `help_label`<sup>Required</sup> <a name="help_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.helpLabel"></a>

```python
help_label: str
```

- *Type:* str

---

##### `help_url`<sup>Required</sup> <a name="help_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.helpUrl"></a>

```python
help_url: str
```

- *Type:* str

---

##### `password_info_tip`<sup>Required</sup> <a name="password_info_tip" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTip"></a>

```python
password_info_tip: str
```

- *Type:* str

---

##### `password_label`<sup>Required</sup> <a name="password_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.passwordLabel"></a>

```python
password_label: str
```

- *Type:* str

---

##### `show_password_visibility_toggle`<sup>Required</sup> <a name="show_password_visibility_toggle" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggle"></a>

```python
show_password_visibility_toggle: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `show_user_identifier`<sup>Required</sup> <a name="show_user_identifier" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifier"></a>

```python
show_user_identifier: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sign_in_label`<sup>Required</sup> <a name="sign_in_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.signInLabel"></a>

```python
sign_in_label: str
```

- *Type:* str

---

##### `unlock_account_label`<sup>Required</sup> <a name="unlock_account_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabel"></a>

```python
unlock_account_label: str
```

- *Type:* str

---

##### `unlock_account_url`<sup>Required</sup> <a name="unlock_account_url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrl"></a>

```python
unlock_account_url: str
```

- *Type:* str

---

##### `username_info_tip`<sup>Required</sup> <a name="username_info_tip" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTip"></a>

```python
username_info_tip: str
```

- *Type:* str

---

##### `username_label`<sup>Required</sup> <a name="username_label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.usernameLabel"></a>

```python
username_label: str
```

- *Type:* str

---

##### `widget_generation`<sup>Required</sup> <a name="widget_generation" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.widgetGeneration"></a>

```python
widget_generation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PreviewSigninPageWidgetCustomizations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations">PreviewSigninPageWidgetCustomizations</a>]

---



